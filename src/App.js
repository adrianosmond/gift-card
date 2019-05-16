import React, { useState, useCallback } from 'react';
import GlobalStyles from 'style/global';

function App() {
  const [hasGiftCard, setHasGiftCard] = useState(false);
  const toggleGiftCard = useCallback(() => setHasGiftCard(state => !state), [
    setHasGiftCard,
  ]);
  return (
    <section>
      <GlobalStyles />
      <h3>Gift Cards</h3>
      <label>
        <input type="checkbox" value={hasGiftCard} onChange={toggleGiftCard} />
        Do you have a gift card?
      </label>
      {hasGiftCard && (
        <div>
          <p>
            Please enter the 19-digit number and code from your gift card below
          </p>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <button>Apply</button>
        </div>
      )}
    </section>
  );
}

export default App;
