// إعادة تشغيل الأنميشن تلقائيًا كل 10 ثواني
setInterval(() => {
  const wrapper = document.querySelector('.birthday__wrapper');
  wrapper.style.animation = 'none';
  wrapper.offsetHeight; // trigger reflow
  wrapper.style.animation = null;
}, 10000);