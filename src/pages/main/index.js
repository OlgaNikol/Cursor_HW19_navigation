import img from '../../assets/images/1.jpg.webp';

const Main = () => {
    return <div className="container">
        <h1>James Webb telescope captures end stages of dying star's life</h1>
        <img src={img} alt="star"/>
        <section>
            <p>Mesmerising images of the end stages of a distant star's life have been captured by the James Webb space
                telescope (JWST).</p>

            <p>They show an unprecedented level of detail of a doughnut-like structure of glowing gas known as the Ring
                Nebula.</p>

            <p>Some 2,600 light-years from Earth, the nebula was born from a dying star that expelled its outer layers
                into space.</p>

            <p>The images could provide key insights into the life cycles of stars, scientists say.</p>

            <p>Along with the intricate details of the nebula's expanding colourful shell, the images also reveal the
                inner region around the central white dwarf "in exquisite clarity", Professor Mike Barlow, co-leader of
                the team of astronomers who released the images, said.</p>

            <p>"We are witnessing the final chapters of a star's life, a preview of the sun's distant future so to
                speak, and JWST's observations have opened a new window into understanding these awe-inspiring cosmic
                events.</p>
        </section>
    </div>
}

export default Main;