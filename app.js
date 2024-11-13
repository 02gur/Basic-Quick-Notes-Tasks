const express = require("express");
const fs = require("fs");
const app = express();
const port = 5555;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let tasks = [];

// Veriyi dosyaya kaydet
function saveTasksToFile() {
    const data = tasks.map(task => ({
        content: task.content,
        dueDateTime: task.dueDateTime.toISOString(),
        createdAt: task.createdAt.toISOString(),
    }));
    fs.writeFileSync('tasks.txt', JSON.stringify(data, null, 2));
}

// Veriyi dosyadan yükle
function loadTasksFromFile() {
    if (fs.existsSync('tasks.txt')) {
        const data = fs.readFileSync('tasks.txt', 'utf-8');
        tasks = JSON.parse(data).map(task => ({
            content: task.content,
            dueDateTime: new Date(task.dueDateTime),
            createdAt: new Date(task.createdAt),
        }));
    }
}

// Başlangıçta veriyi dosyadan yükle
loadTasksFromFile();

// Görev süresi dolmuş olanları sil
function removeExpiredTasks() {
    const now = new Date();
    tasks = tasks.filter(task => task.dueDateTime > now);  // Geçmişteki görevleri kaldır
    saveTasksToFile();  // Dosyayı güncelle
}

// Ana sayfa
app.get("/", (req, res) => {
    removeExpiredTasks();  // Sayfa her yüklendiğinde süresi dolmuş görevleri temizle
    res.render("index", { tasks });
});

// Görev ekleme
app.post("/add", (req, res) => {
    const taskContent = req.body.content;
    const dueDate = req.body.due_date; // "yyyy-mm-dd" formatında gelir
    const dueTime = req.body.due_time; // "HH:MM" formatında gelir

    const [year, month, day] = dueDate.split("-").map(Number);
    const [hour, minute] = dueTime.split(":").map(Number);

    const dueDateTime = new Date(year, month - 1, day, hour, minute);

    tasks.push({ content: taskContent, dueDateTime, createdAt: new Date() });

    // Görevi kaydet
    saveTasksToFile();

    res.redirect("/");
});

// Görev silme
app.post("/delete", (req, res) => {
    const taskId = req.body.taskId;

    // Verilen ID'yi görevin listeden silinmesi
    tasks = tasks.filter((task, index) => index != taskId);

    // Dosyayı güncelle
    saveTasksToFile();

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
