import React, { Component } from 'react';

class BookDetails extends Component {
  render() {
    return (
      <div className="search-result">
      <div className="media">
      <img src="https://images.gr-assets.com/books/1474154022l/3.jpg" className="mr-3" alt="Harry Potter and the Sorcerer's Stone " />
      <div className="media-body">
        <h5 className="mt-0">Harry Potter and the Sorcerer's Stone </h5>
        <p>Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.
    
        After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.
        
        Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.
        
        Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.</p>
      </div>
    </div>
      </div>
    );
  }
}

export default BookDetails;