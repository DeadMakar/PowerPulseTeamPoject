const AddExerciseSuccess = ({ exerciseTime, caloriesBurned }) => {
  return (
    <>
      <img src="#" /> {/* палец вверх, прописать правильній путь к нему */}
      <h2>Well done</h2>
      <p>Your time: {exerciseTime}</p>
      <p>Burned calories: {caloriesBurned}</p>
      <a href="">Next product</a> {/* ссылка в виде кнопки Next product */}
      <a href="">to the Diary</a>
    </>
  );
};

export default AddExerciseSuccess;
