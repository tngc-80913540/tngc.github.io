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

function CheckInput() {
   if ( ! checkLength( document.formdata.姓名.value, 2 ) ) 
      window.alert( "姓名資料錯誤!" );
   if ( ! checkID( document.formdata.身分證字號.value ) )
      window.alert( "身份證字號錯誤!" );
   if ( ! checkEmail( document.formdata.E-mail.value ) ) 
      window.alert( "E-mail 位址資料錯誤!" );
}

function checkLength( dat, len ) {
   return (dat.length >= len);
}

function checkEmail( id ) {
   return ( checkLength(id, 5) && id.indexOf("@") != -1 );
}

function checkID( id ) {
   tab = "ABCDEFGHJKLMNPQRSTUVWXYZIO"
   A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
   A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
   Mx = new Array (9,8,7,6,5,4,3,2,1,1);

   if ( id.length != 10 ) return false;
   i = tab.indexOf( id.charAt(0) );
   if ( i == -1 ) return false;
   sum = A1[i] + A2[i]*9;

   for ( i=1; i<10; i++ ) {
      v = parseInt( id.charAt(i) );
      if ( isNaN(v) ) return false;
      sum = sum + v * Mx[i];
   }
   if ( sum % 10 != 0 ) return false;
   return true;
}

