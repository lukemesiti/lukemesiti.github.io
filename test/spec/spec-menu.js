describe("Menu", function () {

  /**
  * Create hamburger menu element, add it to the body
  */
  var element;

  var injectElement = function () {
    var element = document.createElement("div");
    element.classList.add("hamburger");
    document.body.appendChild(element);
    return element;
  };

  // var overlay = document.querySelector(".overlay");

  describe("When the user scrolls passed 150px", function () {
    beforeEach( function () {
      var scrollEvent = document.createEvent( 'CustomEvent' );
      scrollEvent.initCustomEvent( 'scroll', false, false, null );

      var expectedLeft = 123;
      var expectedTop = 456;
      window.document.body.style.minHeight = '9000px';
      window.document.body.style.minWidth = '9000px';

      element = injectElement();

      window.scrollTo( expectedLeft, expectedTop );
      window.dispatchEvent( scrollEvent );
    });
      // var hamburger = document.querySelector(".hamburger");
      it("should show the hamburger menu", function () {
        console.log(window.scrollY);
        console.log(element);
        expect(element.classList.contains("drop-hamburger")).toBeTruthy();
      });
  });
});
