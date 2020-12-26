export default function Navigation() {
  return (
    <header>
      <div class="cd-dropdown-wrapper">
        <a class="cd-dropdown-trigger" href="#0">Dropdown</a>
          <nav class="cd-dropdown">
            <h2>Title</h2>
            <a href="#0" class="cd-close">Close</a>
            <ul class='cd-dropdown-content'>
              <li>
                <form class="cd-search">
                  <input type="search" placeholder="Search..."/>
                </form>
              </li>

              <li class="has-children">
                <a href="#0">Clothing</a>
                <ul class="cd-secondary-dropdown is-hidden">
                  <li class="go-back"><a href="#0">Menu</a></li>
                  <li class="see-all"><a href="#0">All Clothing</a></li>
                  <li class="has-children">
                    <a href="#0">Accessories</a>
                    <ul class="is-hidden">
                      <li class="go-back"><a href="#0">Clothing</a></li>
                      <li class="see-all"><a href="#0">All Accessories</a></li>
                      <li class="has-children">
                        <a href="#0">Beanies</a>
                        <ul class="is-hidden">
                            <li class="go-back"><a href="#0">Accessories</a></li>
                            <li class="see-all"><a href="#0">All Benies</a></li>
                            <li><a href="#0">Caps &amp; Hats</a></li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="#0">Caps &amp; Hats</a>
                        <ul class="is-hidden">
                            <li class="go-back"><a href="#0">Accessories</a></li>
                            <li class="see-all"><a href="#0">All Caps &amp; Hats</a></li>
                            <li><a href="#0">Beanies</a></li>
                        </ul>
                      </li>
                      <li><a href="#0">Glasses</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="cd-divider">Divider</li>
              <li><a href="#0">Page 1</a></li>
            </ul>
          </nav>
      </div>
      <style jsx>{`
         header .cd-dropdown {
           background: red;
         }
      `}
      </style>
    </header>
  );
}