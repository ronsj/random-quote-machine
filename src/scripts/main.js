((window, document) => {

  const RQM = (() => {
    
    const API_URL = 'https://quotesondesign.com/wp-json/posts';

    const _getQuote = () => {
      fetch(`${API_URL}?filter[orderby]=rand&filter[posts_per_page]=1`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Response not OK");
          }
        })
        .then(resData => {
          console.log(resData);
        })
        .catch(err => {
          console.log(err);
        });
    }

    _getQuote();

  })();

  window.RQM = RQM || {};

})(window, document);
