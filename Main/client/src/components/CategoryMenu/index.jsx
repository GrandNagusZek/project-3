// import { useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';
// import { QUERY_CATEGORIES } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';

// function CategoryMenu() {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

//   const { categories } = state;

//   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

//   useEffect(() => {
//     if (categoryData) {
//       dispatch({
//         type: UPDATE_CATEGORIES,
//         categories: categoryData.categories,
//       });
//       categoryData.categories.forEach((category) => {
//         idbPromise('categories', 'put', category);
//       });
//     } else if (!loading) {
//       idbPromise('categories', 'get').then((categories) => {
//         dispatch({
//           type: UPDATE_CATEGORIES,
//           categories: categories,
//         });
//       });
//     }
//   }, [categoryData, loading, dispatch]);

//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_CURRENT_CATEGORY,
//       currentCategory: id,
//     });
//   };

//   return (
//     // <div id ="category">
//     //   <h2>Shop:</h2>
//     //   {categories.map((item) => (
//     //     <button
//     //       key={item._id}
//     //       onClick={() => {
//     //         handleClick(item._id);
//     //       }}
//     //     >
//     //       {item.name}
//     //     </button>
//     //   ))}
//     //  <button
//     //     onClick={() => {
//     //       handleClick('');
//     //     }}
//     //   >
//     //     All
//     //   </button>
//     // </div>
//     <div class="navbar">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <div class="dropdown">
//     <button class="dropbtn">Dropdown
//       <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div>
// </div>
//   );
// }

// export default CategoryMenu;





import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div className="dropdown">
        <button className="dropbtn">Categories
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {categories.map((item) => (
            <a
              key={item._id}
              href="#"
              onClick={() => {
                handleClick(item._id);
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            onClick={() => {
              handleClick('');
            }}
          >
            All
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;