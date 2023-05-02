import React from 'react'
import './footer.css'

function Footer(){
  return (
    <> 
        {/* <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"> */}

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
                <div class="col-md-4">
                    <h3>Contact</h3>
                    <ul>
                        <li>Phone: 555-555-5555</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h3>Follow Us</h3>
                    <ul class="social-icons">
                        <li><a href="www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="google.com"><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</>
  )
}

export default Footer