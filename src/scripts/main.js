((window, document) => {

  const RQM = (() => {

    const API_URL = '//quotesondesign.com/wp-json/posts';

    const _getQuote = () => {
      fetch(`${API_URL}?filter[orderby]=rand&filter[posts_per_page]=1`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Response not OK');
          }
        })
        .then(resData => {
          _displayQuote(resData[0].content);
        })
        .catch(err => {
          console.log(err);
        });
    }

    const _displayQuote = (content) => {
      const el = document.querySelector('#quote--text');
      el.innerHTML = _stripHtmlTags(content);
    }

    const _stripHtmlTags = str => str.replace(/<[^>]*>/g, '');

    return {
      init() {
        _getQuote();
        const quoteBtn = document.querySelector('#quote--btn')
        quoteBtn.addEventListener('click', (e) => {
          e.preventDefault();
          _getQuote();
        });
      }
    }

  })();

  window.RQM = RQM || {};

  document.addEventListener('DOMContentLoaded', () => {
    RQM.init();
  });

})(window, document);
