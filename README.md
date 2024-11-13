<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Quick Notes Tasks</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        h1, h2 {
            text-align: center;
        }
        pre {
            background-color: #f1f1f1;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            max-width: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        ul {
            list-style-type: none;
        }
        .note {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        footer {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Basic Quick Notes Tasks</h1>

        <h2>Proje Yapısı</h2>
        <pre>
quick-notes-tasks/
├── app.js               # Express.js ana uygulama dosyası
├── public/              # Statik dosyalar (CSS, JS, img)
│   ├── css/
│   │   └── style.css    # Stil dosyası
├── views/               # EJS şablonları (HTML dosyaları)
│   ├── index.ejs        # Ana sayfa şablonu
├── package.json         # Gerekli kütüphaneler ve proje ayarları
└── README.md            # Proje açıklaması
        </pre>

        <h2>Kurulum</h2>
        <p>Projeyi kurmak için aşağıdaki adımları takip edebilirsiniz:</p>
        <ul>
            <li>Depoyu bilgisayarınıza klonlayın:</li>
            <pre><code>git clone https://github.com/02gur/quick-notes-tasks.git</code></pre>
            <li>Projeye gidin ve gerekli Node.js kütüphanelerini yükleyin:</li>
            <pre><code>cd quick-notes-tasks</code></pre>
            <pre><code>npm install</code></pre>
            <li>Uygulamayı başlatın:</li>
            <pre><code>npm start</code></pre>
        </ul>

        <h2>Çalıştırma</h2>
        <p>Uygulama, <a href="http://localhost:3000">http://localhost:3000</a> adresinde çalışacaktır.</p>

        <h2>Katkı Sağlama</h2>
        <p>Katkıda bulunmak için, aşağıdaki adımları takip edebilirsiniz:</p>
        <ul>
            <li>Projeyi çatallayın (fork).</li>
            <li>Yeni bir dal oluşturun (branch).</li>
            <li>Değişikliklerinizi yapın ve test edin.</li>
            <li>Pull request gönderin.</li>
        </ul>

        <footer>
            <p>Proje [MIT Lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır.</p>
        </footer>
    </div>

</body>
</html>
