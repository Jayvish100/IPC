// =========== Account Screen =================
// fetch(TEST_URL + 'api/header', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(responseJson => {
//     // console.log(responseJson);
//     if (responseJson.status == 'success') {
//       let itemOriginal = responseJson.data;
//       // console.log(itemOriginal, '========= FETCH');
//       let items = [];
//       let setExp = [];
//       Object.getOwnPropertyNames(itemOriginal).forEach(function (
//         val,
//         idx,
//         array,
//       ) {
//         items.push(itemOriginal[val]);
//         setExp.push(false);
//         //  console.log(val );
//       });
//       items.sort((a, b) =>
//         a.seq_no > b.seq_no ? 1 : b.seq_no > a.seq_no ? -1 : 0,
//       );
//       // console.log(items, '============ FETCH');
//       //  items.sort((a, b) => a.seq_no.localeCompare(b.seq_no));
//       setMenuData(items);
//       setExpanded(setExp);
//       //console.log(video);
//     } else {
//     }
//   })
//   .catch(err => console.log(err));
