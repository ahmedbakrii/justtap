// ==========================================
// 1. منطقة إدخال البيانات (عدّل هنا فقط!)
// ==========================================
const profileData = {
    images: {
        cover: "images/cover.jpg",                           // صورة الغلاف من مجلد الشخص
        profile: "images/profile.jpg",                       // الصورة الشخصية من مجلد الشخص
        logo: "https://jus-tt-ap.com/images/logo.png"        // رابط اللوجو الثابت من موقعك الأساسي
    },
    contact: {
        phone: "+966500000000",      // رقم الهاتف (بالمفتاح الدولي وعلامة +)
        whatsapp: "966500000000",    // رقم الواتساب (بالمفتاح الدولي بدون +)
        email: "magd@example.com"    // الإيميل
    },
    socials: {
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "",                 // اترك الرابط فارغاً لإخفاء الأيقونة
        instagram: "https://instagram.com/yourprofile",
        facebook: "",                
        snapchat: "",
        tiktok: "",
        website: "https://jus-tt-ap.com"
    },
    // البيانات باللغة العربية
    ar: {
        name: "ماجد محمد",
        job: "أخصائي صحة وسلامة مهنية (HSE)",
        bio: "متخصص في إدارة المخاطر الصناعية وتطبيق معايير السلامة العالمية في بيئات العمل لضمان إنتاجية آمنة ومستدامة.",
        saveContact: "حفظ جهة الاتصال",
        call: "اتصال",
        whatsapp: "واتساب",
        email: "إيميل",
        socialTitle: "تواصل معي عبر المنصات",
        poweredBy: "بدعم من"
    },
    // البيانات باللغة الإنجليزية
    en: {
        name: "Magd Mohamed",
        job: "HSE Specialist",
        bio: "Specialized in industrial risk management and implementing global safety standards in work environments.",
        saveContact: "Save Contact",
        call: "Call",
        whatsapp: "WhatsApp",
        email: "Email",
        socialTitle: "Connect With Me",
        poweredBy: "Powered by"
    }
};

// ==========================================
// 2. كود التشغيل (لا تقم بتعديل ما بالأسفل)
// ==========================================

let currentLang = 'ar'; // اللغة الافتراضية

const socialIcons = {
    linkedin: "fa-brands fa-linkedin-in",
    twitter: "fa-brands fa-x-twitter",
    instagram: "fa-brands fa-instagram",
    facebook: "fa-brands fa-facebook-f",
    snapchat: "fa-brands fa-snapchat",
    tiktok: "fa-brands fa-tiktok",
    website: "fa-solid fa-globe"
};

function initProfile() {
    document.getElementById('cover-img').style.backgroundImage = `url('${profileData.images.cover}')`;
    document.getElementById('profile-img').src = profileData.images.profile;
    document.getElementById('footer-logo-img').src = profileData.images.logo;

    document.getElementById('link-phone').href = `tel:${profileData.contact.phone}`;
    document.getElementById('link-whatsapp').href = `https://wa.me/${profileData.contact.whatsapp}`;
    document.getElementById('link-email').href = `mailto:${profileData.contact.email}`;

    const socialContainer = document.getElementById('social-container');
    socialContainer.innerHTML = '';
    for (const [network, url] of Object.entries(profileData.socials)) {
        if (url.trim() !== "") {
            const a = document.createElement('a');
            a.href = url;
            a.target = "_blank";
            a.innerHTML = `<i class="${socialIcons[network]}"></i>`;
            socialContainer.appendChild(a);
        }
    }
    applyLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
}

function applyLanguage() {
    const data = profileData[currentLang];
    
    document.getElementById('html-tag').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('html-tag').lang = currentLang;

    document.getElementById('name').textContent = data.name;
    document.getElementById('job-title').textContent = data.job;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('save-text').textContent = data.saveContact;
    document.getElementById('call-text').textContent = data.call;
    document.getElementById('wa-text').textContent = data.whatsapp;
    document.getElementById('email-text').textContent = data.email;
    document.getElementById('social-title-text').textContent = data.socialTitle;
    document.getElementById('powered-text').textContent = data.poweredBy;
}

function downloadVCard() {
    const data = profileData[currentLang];
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${data.name}
N;CHARSET=UTF-8:;${data.name};;;
TEL;TYPE=WORK,VOICE:${profileData.contact.phone}
EMAIL;TYPE=PREF,INTERNET:${profileData.contact.email}
TITLE;CHARSET=UTF-8:${data.job}
URL:${profileData.socials.website}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// تشغيل الوظائف بمجرد تحميل الملف
window.onload = initProfile;