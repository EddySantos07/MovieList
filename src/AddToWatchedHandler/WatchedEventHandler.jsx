const WatchedEventHandler = (event) => {
    console.log(event.target, 'WE NEED TO ADD THIS TO ALREADY WATCHED');
  return null;
};
/*

we take the ID of the movie and title and then query a db for it then we chcek if it exists in WATCHED table if it doesnt we 
add it to that table;

*/

export default WatchedEventHandler;
