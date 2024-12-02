import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import serviceImg from '../../../assets/service/service-bg.jpg';
import paperImg from '../../../assets/service/paper-bg.jpg';
import plasticImg from '../../../assets/service/plastic-bg.jpg';
import metalImg from '../../../assets/service/metal-bg.jpg';
import textileImg from '../../../assets/service/textile-bg.jpg';
import electronicImg from '../../../assets/service/elctronic-bg.jpg';
import glassImg from '../../../assets/service/glass-bg.jpg';
import useService from '../../../hooks/useService';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServiceCategory from '../ServiceCategory/ServiceCategory';


const Service = () => {
    const [service] = useService();
    const paper = service.filter(item => item.category === 'paper');
    const plastic = service.filter(item => item.category === 'plastic');
    const metal = service.filter(item => item.category === 'metal');
    const glass = service.filter(item => item.category === 'glass');
    const textile = service.filter(item => item.category === 'textile');
    const electronic = service.filter(item => item.category === 'electronic');
    const offered = service.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Recyclo | Service</title>
            </Helmet>

            <Cover img={serviceImg} title="Our Service"></Cover>
            {/* Main Cover */}
            <SectionTitle heading="Today's Deal"></SectionTitle>

            {/* Offered Items */}
            <ServiceCategory items={offered}></ServiceCategory>

            {/* Paper service items */}
            <ServiceCategory
            items={paper}
            title="paper"
            img={paperImg}
            ></ServiceCategory>

            {/* Plastic service items */}
            
            <ServiceCategory
            items={plastic}
            title="plastic"
            img={plasticImg}
            ></ServiceCategory>


            {/* Metal service items */}
            <ServiceCategory
            items={metal}
            title="metal"
            img={metalImg}
            ></ServiceCategory>

            {/* Textile service items */}
            <ServiceCategory
            items={textile}
            title="textile"
            img={textileImg}
            ></ServiceCategory>


            {/* Electronic service items */}
            <ServiceCategory
            items={electronic}
            title="electronic"
            img={electronicImg}
            ></ServiceCategory>

            {/* Glass service items */}
            <ServiceCategory
            items={glass}
            title="glass"
            img={glassImg}
            ></ServiceCategory>

        </div>
    );
};

export default Service;