/**
 * LoopCraft - Main JavaScript
 * Handles Theme, Language, Animations, and UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Manager
    const ThemeManager = {
        init() {
            const savedTheme = localStorage.getItem('n8n-store-theme') || 'dark';
            this.apply(savedTheme);
            
            document.querySelectorAll('.theme-toggle').forEach(btn => {
                btn.addEventListener('click', () => this.toggle());
            });
        },
        toggle() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.apply(newTheme);
        },
        apply(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('n8n-store-theme', theme);
            
            // Update icons
            document.querySelectorAll('.theme-toggle').forEach(btn => {
                btn.textContent = theme === 'dark' ? '🌙' : '☀️';
            });
        }
    };

    // 2. Language Manager
    const LangManager = {
        translations: {
            en: {
                'nav-home': 'Home', 'nav-store': 'Store', 'nav-how-to-buy': 'How to Buy', 'nav-about': 'About',
                'hero-badge': 'n8n Automation Expert', 'hero-h1-1': 'Automate Your Business', 'hero-h1-2': 'with Ready-Made', 'hero-h1-3': 'n8n Workflows',
                'hero-desc': 'Scale your operations with professional, pre-built n8n workflows. Save hundreds of hours of manual work with just a few clicks.',
                'hero-cta-primary': '⚡ Browse Workflows', 'hero-cta-secondary': 'How to Buy',
                'stat-1-val': '10+', 'stat-1-label': 'Workflows', 'stat-2-val': '100%', 'stat-2-label': 'Tested', 'stat-3-val': '24h', 'stat-3-label': 'Delivery',
                'featured-h2': 'Featured Workflows', 'featured-p': 'Our most popular automations to get you started.',
                'order-now': 'Order Now', 'view-all': 'View All Workflows →', 'how-h2': 'How It Works', 'how-p': 'Simple steps to get your automation running.',
                'step-1-title': 'Choose', 'step-1-desc': 'Pick a workflow that fits your business needs from our store.',
                'step-2-title': 'Pay', 'step-2-desc': 'Send the payment via USDT and share the screenshot with us.',
                'step-3-title': 'Receive', 'step-3-desc': 'Get your JSON file within 24 hours and import it directly to n8n.',
                'learn-more': 'Learn More', 'store-h1': 'Automation Store', 'store-p': 'Browse our collection of high-performance n8n workflows.',
                'filter-all': 'All', 'filter-marketing': '📧 Marketing', 'filter-social': '📱 Social Media', 'filter-ecommerce': '🛒 E-commerce', 'filter-productivity': '⚙️ Productivity', 'filter-crm': '👥 CRM',
                'store-note': '<strong>Note:</strong> All purchases are processed manually. Click "Order Now" to see payment instructions and contact us on Instagram to receive your workflow JSON file.',
                'how-h1': 'How to Buy', 'how-p-sub': 'Follow these simple steps to get your n8n workflows.',
                'how-step-1-t': 'Choose Your Workflow', 'how-step-1-d': 'Browse our store, find the automation that fits your needs, and click "Order Now".',
                'how-step-2-t': 'Send Payment', 'how-step-2-d': 'Send the exact USDT (TRC-20) amount to our wallet address provided below.',
                'how-step-3-t': 'Screenshot + Contact', 'how-step-3-d': 'Take a screenshot of the confirmation and send it to our Instagram DM.',
                'how-step-4-t': 'Receive JSON', 'how-step-4-d': 'We will verify and send you the JSON file within 24 hours to import into n8n.',
                'wallet-t': 'Official USDT Wallet (TRC-20)', 'wallet-d': 'Please ensure you are using the TRC-20 network to avoid loss of funds.',
                'contact-t': 'Contact Us', 'contact-d': 'Send your payment proof to our Instagram for the fastest delivery.',
                'delivery-t': '24h Delivery', 'delivery-d': 'Once confirmed, your workflow JSON and basic setup instructions will be sent to you.',
                'faq-h2': 'Frequently Asked Questions',
                'about-h1': "Hi, I'm the Automation Guy", 'about-p1': 'I specialize in building complex, high-efficiency automation workflows using n8n. My goal is to help businesses save time and reduce errors by automating repetitive tasks.',
                'about-p2': 'With LoopCraft, I\'m sharing my most effective, production-ready workflows so you can start automating in minutes, not days.',
                'view-store': 'View Store', 'contact-me': 'Contact Me', 'tools-h2': 'Tools & Integrations', 'tools-p': 'Expertise across the entire automation ecosystem.',
                'why-h2': 'Why Choose LoopCraft?', 'test-h2': 'What Our Customers Say'
            },
            ar: {
                'nav-home': 'الرئيسية', 'nav-store': 'المتجر', 'nav-how-to-buy': 'كيفية الشراء', 'nav-about': 'عن المشروع',
                'hero-badge': 'خبير أتمتة n8n', 'hero-h1-1': 'أتمت أعمالك', 'hero-h1-2': 'باستخدام سير عمل', 'hero-h1-3': 'n8n جاهز',
                'hero-desc': 'ارتقِ بعملك باستخدام سير عمل n8n احترافي وجاهز. وفر مئات الساعات من العمل اليدوي ببضع نقرات فقط.',
                'hero-cta-primary': '⚡ تصفح سير العمل', 'hero-cta-secondary': 'كيفية الشراء',
                'stat-1-val': '+10', 'stat-1-label': 'سير عمل', 'stat-2-val': '100%', 'stat-2-label': 'مختبر', 'stat-3-val': '24 ساعة', 'stat-3-label': 'تسليم',
                'featured-h2': 'سير العمل المميز', 'featured-p': 'أكثر عمليات الأتمتة شيوعاً لتبدأ بها.',
                'order-now': 'اطلب الآن', 'view-all': 'عرض كل سير العمل ←', 'how-h2': 'كيف يعمل؟', 'how-p': 'خطوات بسيطة لتشغيل الأتمتة الخاصة بك.',
                'step-1-title': 'اختر', 'step-1-desc': 'اختر سير العمل الذي يناسب احتياجات عملك من متجرنا.',
                'step-2-title': 'ادفع', 'step-2-desc': 'أرسل الدفعة عبر USDT وشارك لقطة الشاشة معنا.',
                'step-3-title': 'استلم', 'step-3-desc': 'احصل على ملف JSON الخاص بك في غضون 24 ساعة واستورده مباشرة إلى n8n.',
                'learn-more': 'تعلم المزيد', 'store-h1': 'متجر الأتمتة', 'store-p': 'تصفح مجموعتنا من سير عمل n8n عالي الأداء.',
                'filter-all': 'الكل', 'filter-marketing': '📧 التسويق', 'filter-social': '📱 التواصل الاجتماعي', 'filter-ecommerce': '🛒 التجارة الإلكترونية', 'filter-productivity': '⚙️ الإنتاجية', 'filter-crm': '👥 إدارة العملاء',
                'store-note': '<strong>ملاحظة:</strong> تتم معالجة جميع المشتريات يدوياً. انقر فوق "اطلب الآن" لرؤية تعليمات الدفع وتواصل معنا على Instagram لاستلام ملف JSON.',
                'how-h1': 'كيفية الشراء', 'how-p-sub': 'اتبع هذه الخطوات البسيطة للحصول على سير عمل n8n.',
                'how-step-1-t': 'اختر سير العمل', 'how-step-1-d': 'تصفح المتجر، وابحث عن الأتمتة التي تناسب احتياجاتك، وانقر فوق "اطلب الآن".',
                'how-step-2-t': 'أرسل الدفع', 'how-step-2-d': 'أرسل مبلغ USDT (TRC-20) المحدد إلى عنوان محفظتنا الموضح أدناه.',
                'how-step-3-t': 'اللقطة + التواصل', 'how-step-3-d': 'التقط صورة لتأكيد الدفع وأرسلها إلى رسائل Instagram الخاصة بنا.',
                'how-step-4-t': 'استلم JSON', 'how-step-4-d': 'سنتحقق ونرسل لك ملف JSON في غضون 24 ساعة لاستيراده إلى n8n.',
                'wallet-t': 'محفظة USDT الرسمية (TRC-20)', 'wallet-d': 'يرجى التأكد من استخدام شبكة TRC-20 لتجنب فقدان الأموال.',
                'contact-t': 'اتصل بنا', 'contact-d': 'أرسل إثبات الدفع إلى Instagram الخاص بنا لأسرع تسليم.',
                'delivery-t': 'تسليم خلال 24 ساعة', 'delivery-d': 'بمجرد التأكيد، سيتم إرسال ملف JSON الخاص بسير العمل وتعليمات الإعداد الأساسية إليك.',
                'faq-h2': 'الأسئلة الشائعة',
                'about-h1': "أهلاً، أنا خبير الأتمتة", 'about-p1': 'أنا متخصص في بناء سير عمل أتمتة معقد وعالي الكفاءة باستخدام n8n. هدفي هو مساعدة الشركات على توفير الوقت وتقليل الأخطاء من خلال أتمتة المهام المتكررة.',
                'about-p2': 'مع LoopCraft، أشارككم سير العمل الأكثر فعالية وجاهزية للإنتاج حتى تتمكنوا من البدء في الأتمتة في دقائق، وليس أياماً.',
                'view-store': 'عرض المتجر', 'contact-me': 'اتصل بي', 'tools-h2': 'الأدوات والتكاملات', 'tools-p': 'خبرة عبر نظام الأتمتة بالكامل.',
                'why-h2': 'لماذا تختار LoopCraft؟', 'test-h2': 'ماذا يقول عملاؤنا'
            }
        },
        init() {
            const savedLang = localStorage.getItem('n8n-store-lang') || 'en';
            this.apply(savedLang);
            
            document.querySelectorAll('.lang-toggle').forEach(btn => {
                btn.addEventListener('click', () => this.toggle());
            });
        },
        toggle() {
            const currentLang = document.documentElement.getAttribute('lang');
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            this.apply(newLang);
        },
        apply(lang) {
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            localStorage.setItem('n8n-store-lang', lang);
            
            // Update buttons
            document.querySelectorAll('.lang-toggle').forEach(btn => {
                btn.textContent = lang === 'en' ? 'AR' : 'EN';
            });
            
            // Translate strings
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (this.translations[lang][key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = this.translations[lang][key];
                    } else {
                        el.innerHTML = this.translations[lang][key];
                    }
                }
            });
        }
    };

    // 3. Navbar & Mobile Menu
    const initNavbar = () => {
        const nav = document.querySelector('.navbar');
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    };

    // 4. Modal Logic
    const Modal = {
        overlay: document.getElementById('paymentModal'),
        title: document.getElementById('modalTitle'),
        price: document.getElementById('modalPrice'),
        
        init() {
            if (!this.overlay) return;
            
            document.querySelectorAll('.order-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const name = btn.getAttribute('data-name');
                    const price = btn.getAttribute('data-price');
                    this.open(name, price);
                });
            });
            
            document.getElementById('closeModal').addEventListener('click', () => this.close());
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
            
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.close();
            });
        },
        open(name, price) {
            this.title.textContent = name;
            this.price.textContent = price;
            this.overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        },
        close() {
            this.overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // 5. Toast & Copy
    const showToast = (msg) => {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    window.copyWallet = () => {
        const addr = document.getElementById('walletAddress').textContent;
        navigator.clipboard.writeText(addr).then(() => {
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            showToast(isAr ? '✓ تم النسخ إلى الحافظة!' : '✓ Copied to clipboard!');
        });
    };

    window.copyMainWallet = () => {
        const addr = document.getElementById('mainWalletAddress').textContent;
        navigator.clipboard.writeText(addr).then(() => {
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            showToast(isAr ? '✓ تم النسخ إلى الحافظة!' : '✓ Copied to clipboard!');
        });
    };

    // 6. Store Filtering
    const initFilters = () => {
        const filters = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.workflow-card');
        
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                cards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    };

    // 7. FAQ Accordion
    const initFAQ = () => {
        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(q => {
            q.addEventListener('click', () => {
                const item = q.parentElement;
                const isActive = item.classList.contains('active');
                
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    };

    // 8. Scroll Reveal
    const initReveal = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger bar animations if it's the about page bars
                    if (entry.target.classList.contains('bar-fill')) {
                        entry.target.style.width = entry.target.getAttribute('data-percent');
                    }
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal, .bar-fill').forEach(el => observer.observe(el));
    };

    // 9. Hero Canvas Animation
    const initHeroCanvas = () => {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        let width, height, particles = [];
        
        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resize);
        resize();
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.2)';
                ctx.fill();
            }
        }
        
        for (let i = 0; i < 60; i++) particles.push(new Particle());
        
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p, i) => {
                p.update();
                p.draw();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - dist / 150;
                        ctx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? `rgba(6, 182, 212, ${opacity * 0.2})` : `rgba(6, 182, 212, ${opacity * 0.1})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        };
        
        animate();
    };

    // Initialize All
    ThemeManager.init();
    LangManager.init();
    initNavbar();
    Modal.init();
    initFilters();
    initFAQ();
    initReveal();
    initHeroCanvas();
});
