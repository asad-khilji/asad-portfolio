const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <h1>Asad Khilji</h1>
        <nav>
            <ul>
                <li>
                    <a href="index.html#about-me">About Me</a>
                </li>
                <li>
                    <a href="index.html#my-portfolio">My Portfolio</a>
                </li>
                <li>
                  <a href="index.html#my-blogs">My Blogs</a>
              </li>
                <li>
                    <a href="index.html#reach-out">Reach Out</a>
                </li>
            </ul>
        </nav>
    </header>
    `;
}

createHeader();

const createSection = () => {
    let section = document.querySelector('section');

    section.innerHTML = `
    <section id="reach-out" class="contact">
        <div class="flex-row">
          <h2 class="section-title secondary-border">
            Reach Out
          </h2>
        </div>
  
        <div class="contact-info">
          <div>
            <h3>Asad Khilji</h3><br>
            <p>
              Any questions or concerns before signing up? 
              <br/>
              Let me know and I will be happy to talk to you!
              <br>
            </p>
  
            <address>
             
             
            </address>
            
          </div>
  
          <div class="contact-form">
              <h3>Contact Me</h3>
              <form action="https://formsubmit.co/khiljiasad2@gmail.com" method="post">
                <label for="contact-name">Your Name</label>
                <input type="text" id="name" name="Name" placeholder="Your Name" />
  
                <label for="contact-email">Your Email Address</label>
                <input type="text" id="email" name="Email" placeholder="Your Email Address" />
  
                <label for="contact-phone">Your Phone Number</label>
                <input type="text" id="phone" name="Phone" placeholder="Your Phone Number" />
            
                <label for="contact-message">Your Message</label>
                <textarea id="message" name="Message" placeholder="Your Message"></textarea>
            
                <button type="submit">Submit</button>
              </form>
            </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12182.30520634488!2d-74.0652613!3d40.2407219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1561060983193!5m2!1sen!2sus"
            frameborder="0" style="border:0" allowfullscreen>
          </iframe>
        </div>
      </section>
    `;
}

createSection();