import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
const customers = [
  {
    fullName: 'Neta Hellbo',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The best dining experience I've ever had! The atmosphere is so cozy, and the food is absolutely delicious. 
      I highly recommend the truffle pasta – it's to die for! The service was impeccable as well. Can't wait to come back!`,
  },
  {
    fullName: 'Paul Clif',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `An unforgettable meal! From the moment I walked in, I was greeted with warm hospitality. 
      The menu has so many unique and mouth-watering dishes, and everything is made with top-quality ingredients. A five-star experience!`,
  },
  {
    fullName: 'Lisa Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I had a fantastic time at this restaurant! The ambiance is chic and modern, and the food is out of this world. 
      I particularly loved the dessert selection – their chocolate mousse is a must-try! The staff was friendly and attentive. Highly recommended!`,
  },
  {
    fullName: 'Jake Moon',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `If you're looking for an amazing dining experience, look no further! The flavors are vibrant and full of character, 
      and the portions are generous. Whether you're a foodie or just looking for a great meal, this place does not disappoint. Can't wait for my next visit!`,
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
