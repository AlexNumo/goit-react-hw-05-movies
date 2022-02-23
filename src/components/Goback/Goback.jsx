// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export const Controls = ({ current, onChange }) => {
//     const [searchParams, setSearchParams] = useSearchParams();
//   const currentItemPos = Number(searchParams.get('item'));

//   const changeIndex = value => {
//     setSearchParams({ item: currentItemPos + value });
//   };

//   useEffect(() => {
//     if (!currentItemPos) {
//       setSearchParams({ item: 1 });
//     }
//   }, [currentItemPos, setSearchParams]);

//   console.log(searchParams.get('item'));
// //   const totalItems = items.length;
// //   const currentItem = items[currentItemPos - 1];
// //   const showPlaceholder = !loading && totalItems === 0;
// //   const showReaderUI = !loading && totalItems > 0;

//   return (
//     <section>
//       <button
//         type="button"
//         disabled={current === 1}
//         onClick={() => changeIndex(-1)}
//       >
//         Назад
//       </button>
//     </section>
//   );
// };
