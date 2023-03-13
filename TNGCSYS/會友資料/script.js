// 	<!-- 下搭表單的的JS -->
const select = document.querySelector('#select');
const customOptions = ['其他學歷'];

customOptions.forEach(option => {
  const customOption = document.createElement('option');
  customOption.textContent = option;
  customOption.value = option;
  select.appendChild(customOption);
});

// 上傳到資料庫
