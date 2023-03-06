
import img1 from './img/img-1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import { FaFilter } from "react-icons/fa"
import { FaSortDown } from "react-icons/fa"
import './App.css';

function App() {

  
    return (
      <div>
        <header>
        <div>
        <div class="logo1">EDYODA</div>
        <p class="dropdown">Explore Categories <i><FaSortDown/></i></p>
        <button class="website_btn">Go To Main Website</button>
        <p class="logo_stories">Stories</p>
    </div>
    </header>
    <section class="main1">
        <h1>Latest Posts</h1>
        <section>
            <div class="head_div">
            <p><i><FaFilter/></i>Filter by Category</p>
        </div>
        <button class="btn_class" id="btn1">All</button>
        <button class="btn_class">Artifical Intelligence</button>
        <button class="btn_class">Cloud Computing</button>
        <button class="btn_class">DevOps</button>
        <button class="btn_class">Programming Languages</button>
        <button class="btn_class">Mobile Aplication Development</button>
        <button class="btn_class">Technology and Tools</button>
        <button class="btn_class">Get a Job in a Tech Company</button>
        <button class="btn_class">Others</button>
        </section>
        <section class="inner_class">
            <img src={img1} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">Introduction to A machine Learning Online Course</article>
            <p class="Author">EdYoda <span class="Date">| 23 Aug 2019</span></p>
            <p class="author_container">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online....</p>
        </section>
        </section>
        <section class="inner_class">
        <img src={img2} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">LAMP Stack Vs MEAN Stack</article>
            <p class="Author">EdYoda <span class="Date">| 24 Aug 2019</span></p>
            <p class="author_container">In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely...</p>
        </section>
        </section>
        <section class="inner_class">
        <img src={img3} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">Impact of Cloud Computing in Various industries</article>
            <p class="Author">EdYoda <span class="Date">| 24 Aug 2019</span> </p>
            <p class="author_container">Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud tech...</p>

        </section>
        </section>
        <section class="inner_class">
        <img src={img4} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">Challenges of Machine Learning in Bio Data</article>
            <p class="Author">EdYoda <span class="Date">| 24 Aug 2019</span></p>
            <p class="author_container">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling...</p>
        </section>
        </section>
        <section class="inner_class">
        <img src={img5} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">Breaking the Myths around Cybersecurity</article>
            <p class="Author">EdYoda <span class="Date">| 26 Aug 2019</span></p>
            <p class="author_container">As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever.... </p>
        </section>
        </section>
        <section class="inner_class">
        <img src={img6} alt="" class="imgclass"/>
            <section class="text_class">
            <article class="tittle">Importance of Data Backup and Recovery in the IT</article>
            <p class="Author">EdYoda <span class="Date">| 26 Aug 2019</span> </p>
            <p class="author_container">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contin...</p>
            </section>
        </section>

       
    <footer>
        
        <p class="footer_1">EdYoda Developer Program</p>
        <a href="https://www.edyoda.com/" class="footer_2" >www.edyoda.com</a>
    </footer>
    </section>
    </div>
  );
}
export default App;