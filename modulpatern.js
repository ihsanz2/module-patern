const pageState = function (){
    this.init = function (){
        this.pageChange(new homeState);
    };
        this.pageChange = function (state){
        state;
    };
}

const homeState = function() {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
    `;
  };

  // About State
const aboutState = function() {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
      <p>This is the about page</p>
  `;
  };
  
  // Contact State
  const contactState = function() {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  };



let page = new pageState();

page.init()

const home = document.getElementById('home'),
        about = document.getElementById('about'),
        contact = document. getElementById ('contact');

home.addEventListener('click',function(e){
    page.pageChange(new homeState);
    e.preventDefault();
})

about.addEventListener('click', function(e){
    page.pageChange(new aboutState);
    e.preventDefault();
})

contact.addEventListener('click', function (e) {
    page.pageChange(new contactState);
    e.preventDefault();
})
