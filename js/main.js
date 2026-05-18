// الانتظار حتى تحميل مستند الـ HTML بالكامل لضمان عدم وجود أخطاء
document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. MOBILE MENU TOGGLE (قائمة الموبايل المنسدلة)
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // التحقق من وجود الأزرار في الصفحة لمنع توقف الأكواد الأخرى
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            // إضافة أو إزالة الكلاس open لفتح وإغلاق القائمة بالـ CSS
            navMenu.classList.toggle("open");
            
            // تغيير شكل زر الهامبرغر لتأثير تفاعلي بسيط إن أردت لاحقاً
            this.classList.toggle("active");
        });
    }

    // ==========================================
    // 2. FAQ ACCORDION (قائمة الأسئلة الشائعة المطاطية)
    // ==========================================
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const item = this.parentElement;
            const answer = this.nextElementSibling;

            // إغلاق أي أسئلة أخرى مفتوحة للحصول على مظهر نظيف (اختياري)
            document.querySelectorAll(".faq-item").forEach(function(el) {
                if (el !== item) {
                    el.classList.remove("active");
                    el.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            // فتح أو إغلاق السؤال الحالي المضغطوط عليه
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                // تعيين الارتفاع الفعلي للمحتوى الداخلي بديناميكية
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // ==========================================
    // 3. WHATSAPP ORDER GENERATOR (منظومة توليد رابط الواتساب الديناميكي)
    // ==========================================
    const whatsappBtn = document.getElementById("whatsappOrderBtn");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function() {
            // سحب معلومات التخصيص والمنتج والخيارات مباشرة من المدخلات
            const productName = document.getElementById("prodName") ? document.getElementById("prodName").innerText : "منتج Justtap";
            const customerPrintName = document.getElementById("printName") ? document.getElementById("printName").value : "لم يتم التحديد";
            
            // سحب اللون المختار من أزرار الراديو
            const selectedColorElement = document.querySelector('input[name="color"]:checked');
            const selectedColor = selectedColorElement ? selectedColorElement.value : "الافتراضي";

            // رقم الواتساب الخاص بك (قم بتغييره هنا إلى رقمك الحقيقي مباشرة شامل رمز الدولة بدون أصفار)
            const myWhatsappNumber = "966500000000"; 

            // صياغة رسالة الطلب الاحترافية باللغة العربية
            const messageText = `مرحباً Justtap، أود طلب المنتج التالي:\n\n` +
                                `📦 المنتج: ${productName}\n` +
                                `🏷️ الاسم المراد طباعته: ${customerPrintName}\n` +
                                `🎨 اللون المختار: ${selectedColor}\n\n` +
                                `يرجى تأكيد الطلب لتزويدكم بتفاصيل الشحن والموقع. شكراً لكم.`;

            // تشفير النص ليكون متوافقاً كرابط إنترنت آمن ومتكامل
            const encodedMessage = encodeURIComponent(messageText);

            // فتح المحادثة المباشرة فوراً في نافذة جديدة بطلب العميل المخصص
            window.open(`https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    }

    // ==========================================
    // 4. DYNAMIC PRODUCT DETAILS LOADER (موزع تفاصيل المنتجات البسيطة)
    // ==========================================
    // يقوم هذا الجزء بقراءة اسم المنتج من الرابط لتغيير النصوص تلقائياً في صفحة التفاصيل
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('product');
    
    const prodNameEl = document.getElementById("prodName");
    const prodPriceEl = document.getElementById("prodPrice");
    const prodDescEl = document.getElementById("prodDesc");
    const prodImgEl = document.getElementById("prodImg");

    if (productType && prodNameEl) {
        if (productType === "keychain") {
            prodNameEl.innerText = "ميدالية Justtap الذكية (NFC)";
            prodPriceEl.innerText = "99 ريال سعودي";
            prodDescEl.innerText = "ميدالية فاخرة وعملية مصنوعة من مواد متينة لحمل مفاتيحك ومشاركة حساباتك وموقعك ومعلوماتك بلمسة ذكية واحدة لأي هاتف.";
            if(prodImgEl) prodImgEl.src = "https://via.placeholder.com/600x500/003366/ffffff?text=NFC+Keychain+Premium";
        } else {
            // الوضع الافتراضي أو كارت الـ Card
            prodNameEl.innerText = "بطاقة Justtap الذكية (NFC)";
            prodPriceEl.innerText = "149 ريال سعودي";
            prodDescEl.innerText = "بطاقة رقمية فاخرة ومينيمال شبيهة بأسلوب آبل، تطبع باسمك وتعمل بلمسة واحدة لتبهر الجميع وتوفر ثمن الكروت الورقية.";
            if(prodImgEl) prodImgEl.src = "https://via.placeholder.com/600x500/0A2540/ffffff?text=NFC+Card+Premium";
        }
    }

});
