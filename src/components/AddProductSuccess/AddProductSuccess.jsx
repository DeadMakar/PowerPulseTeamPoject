const AddProductSuccess = ({ caloriesPlus }) => {
  return (
    <>
      <img src="../../assets/images/products/avocado.png" />
      <h2>Well done</h2>
      <p>Calories: {caloriesPlus}</p>
      <a href="">Next product</a> {/* ссылка в виде кнопки Next product */}
      <a href="">to the Diary</a>
    </>
  );
};

export default AddProductSuccess;
