import React from 'react'
import '../index.css'
import ScrapCard from '../components/ScrapCard';

const Scrapyard = () => {
  return (
    
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", margin:"20px", marginLeft:"100px"}}>
        <ScrapCard title="Croatia" price="30" image="https://media.istockphoto.com/id/518527764/photo/transformers-protecting-zagreb.jpg?s=612x612&w=0&k=20&c=-ecuGoKuSCBCVpYp8KbGpgNIHyshpI1VCfm8Ov4UjMQ="/>
        <ScrapCard title=" Grim Reaper" price="40" image="https://media.istockphoto.com/id/1356110268/photo/sculpture-park-at-alberrie-creek-on-the-oodnadatta-track.jpg?s=612x612&w=0&k=20&c=cFac7XbsRan6GWxG9YfELnmJticlrkajOfkbDQ6b1vc="/>
        <ScrapCard title="Fotografieren" price="10" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN51OukJAtsYzWn3baeSzxY2rEL-TOJVq5oQ&s"/>
        <ScrapCard title="Guitarist" price="40" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3B0XXsTc3kz4BisNDJ5TybDXiRwLj-wFXsA&s"/>
        <ScrapCard title="Dominic" price="50" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf7W-f6lL5sUfXG88kAo4UQhCsK8iL0p4uA&s"/>
        <ScrapCard title="jackson" price="70" image="https://i.pinimg.com/736x/d7/13/f8/d713f8050d6bcb55b213555a41e18ed0.jpg"/>
        <ScrapCard title="Sky climber" price="80" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxiKYaD6Pm-igWFlQi8CH7SwaxyAsZKXXpw&s"/>
        <ScrapCard title="Croatia" price="30" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOg2dpGrHr2_tpfw12U2Pon835nrfuBEFEJg&s"/>
      
    </div>
 
  )
}

export default Scrapyard;