import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import { NewsFeedComponent } from './NewsFeedComponent';
import {AdCard} from "../Advertising/AdCard";

class NewsFeedPage extends Component {

    state={
        newPost:{},
        newComment:{},
        newsFeed:[
            {
                id:1,
                nomb:"Brenda Ortega",
                fechita:"mayo 19 2018",
                textito:"Había una vez un hombre de Piltóver llamado Corin Reveck, que tenía una hija de nombre Orianna a la que quería más que a nada en el mundo. Pese a que Orianna poseía un talento increíble para el baile, se sentía fascinada por los campeones de League of Legends. Esa fascinación la impulsó a comenzar un entrenamiento para llegar a ser una campeona. Desgraciadamente, su ingenuidad la impulsó a tomar riesgos innecesarios que acabarían desembocando en una muerte trágica. El fallecimiento de Orianna destrozó a Corin, sumiéndolo en una profunda depresión que le llevó a obsesionarse con la tecmaturgia. Incapaz de soportar el vacío que su hija había dejado en su vida, decidió configurar un reemplazo; uno que pudiese hacer realidad el sueño de Oriana de unirse a League. Lo que creó fue una máquina de matar con un mecanismo de relojería, a la que Corin llamó como su hija. A sabiendas de que estaba destinada a convertirse en una campeona y, viendo cómo estaban cambiando los tiempos, creó La Bola para que actuase como su mascota y protectora. Como creación pseudosimbiótica que es, usa un tipo diferente de tecmaturgia que se centra más en la electricidad que de los mecanismos de relojería.\n",
                imagencita:"https://lan.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/winter_wonder_orianna_splash_1920.jpg?itok=AkN3g4GH",
                likes:2,
                comments:[
                    {
                        id:1,
                        avatar:"https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/26904561_10215416097213550_2022246565551428523_n.jpg?_nc_cat=0&oh=510de1035a043bc132f859c92cb63156&oe=5B919219",
                        nomb:"Hector Bliss",
                        fechita:"mayo 19, 2018",
                        textito:"La neta yo no usaria a oriana esta fea"
                    }
                ]
            },
            {
                id:2,
                nomb:"Hector Bliss",
                fechita:"mayo 19 2018",
                textito:"Warwick es un monstruo que ronda por los callejones grises de Zaun. Víctima de agonizantes experimentos, su cuerpo está fusionado con un sistema complejo de cámaras y bombas, una maquinaria que llena sus venas con furia alquímica. Warwick emerge de las sombras y ataca a los criminales que aterrorizan las profundidades de la ciudad. Lo atrae la sangre y su aroma lo vuelve loco. Nadie que la derrame puede escapar de él.",
                imagencita:"https://euw.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/warwick_base_splash.jpg?itok=B9uA64pU",
                likes:10,
                comments:[]

            },
            {
                id:3,
                nomb:"Oswaldo",
                fechita:"mayo 20 2018",
                textito:"Wukong es un embaucador vastayano que usa su fuerza, agilidad e inteligencia para confundir a sus oponentes y obtener la ventaja. Tras encontrar un amigo de por vida en el guerrero conocido como Maestro Yi, Wukong se convirtió en el último aprendiz de la antigua arte marcial conocida como Wuju. Armado con un bastón encantado, Wukong busca impedir que Jonia caiga en la ruina.",
                imagencita:"https://vignette.wikia.nocookie.net/leagueoflegends/images/4/48/Wukong_OriginalSkin.jpg/revision/latest?cb=20170621022248",
                likes:1,
                comments:[]

            },
            {
                id:4,
                nomb:"Mefit Hernandez",
                fechita:"mayo 20 2018",
                textito:"Shieda Kayn, un practicante sin igual de la letal magia sombría, lucha para alcanzar su verdadero destino: conducir la Orden de la Sombra hacia una nueva era de supremacía joniana. Audazmente esgrime el arma darkin viva Rhaast, inmutable ante la progresiva corrupción de su cuerpo y mente. Solo hay dos resultados posibles: o Kayn somete el arma a su voluntad... o la guadaña malévola lo consume por completo, para dar lugar a la destrucción de Runaterra.",
                imagencita:null,
                likes:null,
                comments:[]

            },
            {
                id:5,
                nomb:"Jose Luis",
                fechita:"mayo 21 2018",
                textito:"Es interesante ser papá. Antes que a mi me sucediera yo sabía qué clase de papá quería ser. Podía imaginarme como un tipo que podía ser modelo ejemplar en varias cosas, en papeles que requerían sabiduría, buen carácter y sobre todo, mucho amor y cariño. Y, cuando mi esposa se embarazó con nuestro primer hijo, yo sabía que estaba listo para ser papá. Sabía que podía hacer eso y mucho más. " +
                "Yo sabía que podía ser un papá fantástico. Por ese tiempo, mi hijo nació.",
                imagencita:"http://resize3-doctissimocom.ladmedia.fr/r/940,,force/crop/940,470/img/var/doctissimo/storage/images/common/bienestar/psicologia/educacion/padres-sobreprotectores-sin-autoridad/269837-1-esl-ES/los-papas-gallina-carecen-de-autoridad.jpg",
                likes:100,
                comments:[]

            },


        ],
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.newPost)
        
    }
    handleChange=(e)=>{
        let {newPost} = this.state;
        let field = e.target.name;
        if(e.target.type==="file")newPost[field] = e.target.files[0]
        else newPost[field] = e.target.value
        this.setState({newPost})
        console.log(newPost)
    }

    handleComment=(e)=>{
        let {newComment}=this.state;
        newComment[e.target.name] = e.target.value;
        this.setState({newComment});
        console.log("Estoy escribiendo: ",newComment)
    }

    onCollapse=(e)=>{
        console.log("Vemos que hace",e)
    }



  render() {

    return (
      <GridList cellHeight={'auto'} cols={3}>
        <GridListTile cols={2} style={styles.gridTile}>
            <NewsFeedComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                newsFeed={this.state.newsFeed}
                handleComment={this.handleComment}

            />
        </GridListTile>
          <GridListTile cols={1} style={styles.gridTile}>
            <AdCard/>
              <AdCard/>
              <AdCard/>


          </GridListTile>
      </GridList>
    )
  }
}

const styles = {
    gridTile:{
        padding:'2%'
    }
}

export default NewsFeedPage
