import SocialNetworks from './SocialNetworks';
import Avatar from '../img/deividson2.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Deividson Omedio" />     
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Dowload Curriculo</a>
    </aside>
  )
}

export default Sidebar
