document.addEventListener("DOMContentLoaded", function() {

    // 1. القائمة الجانبية للموبايل (توجل المنيو)
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("open");
            this.classList.toggle("active");
        });
    }

    // 2. قائمة الأسئلة الشائعة (الأكورديون)
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const item = this.parentElement;
            const answer = this.nextElementSibling;

            document.querySelectorAll(".faq-item").forEach(function(el) {
                if (el !== item) {
                    el.classList.remove("active");
                    el.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            item.classList.toggle("active");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // 3. إرسال طلب شراء منتج عبر الواتساب (من صفحة تفاصيل المنتج)
    const whatsappBtn = document.getElementById("whatsappOrderBtn");
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function() {
            const productName = document.getElementById("prodName") ? document.getElementById("prodName").innerText : "منتج Justtap";
            const customerPrintName = document.getElementById("printName") ? document.getElementById("printName").value : "لم يتم التحديد";
            const selectedColorElement = document.querySelector('input[name="color"]:checked');
            const selectedColor = selectedColorElement ? selectedColorElement.value : "الافتراضي";
            
            const myWhatsappNumber = "966576380420"; // <--- ضع رقمك هنا للطلبات
            
            const messageText = `مرحباً Justtap، أود طلب المنتج التالي:\n\n` +
                                `📦 المنتج: ${productName}\n` +
                                `🏷️ الاسم المراد طباعته: ${customerPrintName}\n` +
                                `🎨 اللون المختار: ${selectedColor}\n\n` +
                                `يرجى تأكيد الطلب لتزويدكم بتفاصيل الشحن والموقع. شكراً لكم.`;

            const encodedMessage = encodeURIComponent(messageText);
            window.open(`https://wa.me/${myWhatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    }

    // 4. إرسال استفسار عام عبر الواتساب (من صفحة اتصل بنا الجديدة)
    const contactBtn = document.getElementById("contactSubmitBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function() {
            const clientName = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "";
            const clientMessage = document.getElementById("contactMessage") ? document.getElementById("contactMessage").value.trim() : "";
            
            // التأكد من أن العميل مخلص البيانات ومسابش الخانات فاضية
            if (clientName === "" || clientMessage === "") {
                alert("برجاء كتابة الاسم والرسالة أولاً قبل الإرسال.");
                return;
            }
            
            const myWhatsappNumber = "966576380420"; // <--- ضع رقمك هنا للاستفسارات العامة
            
            const contactText = `📥 *إستفسار جديد من موقع Justtap*\n\n` +
                                `👤 *اسم العميل:* ${clientName}\n` +
                                `💬 *الرسالة والاستفسار:* \n${clientMessage}\n\n` +
                                `رابط الرد السريع المباشر عليه.`;

            const encodedContact = encodeURIComponent(contactText);
            window.open(`https://wa.me/${myWhatsappNumber}?text=${encodedContact}`, '_blank');
        });
    }

    // 5. جلب تفاصيل المنتج ديناميكياً بناءً على الرابط النظيف
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
            if(prodImgEl) prodImgEl.src = "images/products/keychain-main.png"; 
        } else {
            prodNameEl.innerText = "بطاقة Justtap الذكية (NFC)";
            prodPriceEl.innerText = "149 ريال سعودي";
            prodDescEl.innerText = "بطاقة رقمية فاخرة ومينيمال شبيهة بأسلوب آبل، تطبع باسمك وتعمل بلمسة واحدة لتبهر الجميع وتوفر ثمن الكروت الورقية.";
            if(prodImgEl) prodImgEl.src = "images/products/card-main.png"; 
        }
    }

});
