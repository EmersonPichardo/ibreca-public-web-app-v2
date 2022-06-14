import { useContext, useEffect } from "react";
import Paragraph from "../components/paragraph";
import Quote from "../components/quote";
import TitleContext from "../contexts/pageContext";
import StaticPageContainer from "./layout/staticPageContainer";

export default function Faith(): JSX.Element {
    const { setTitle, setUrl } = useContext(TitleContext);

    useEffect(() => {
        setTitle('Declaración de fé');
        setUrl('/src/images/Bible_stand_up_read.jpg');
    }, [])

    return (
        <StaticPageContainer>
            <Paragraph title='Sobre la Bilia'>
                Que <Quote text='todas las Escrituras fueron inspiradas por Dios' source='2 Pedro 1:20-21; 2 Timoteo 3:16' />, y que Cada autor fue movido y dirigido por el Espíritu Santo preservando sus personalidades y estilos diferentes para escribir la Palabra de Dios, de tal forma que no contienen error alguno en la revelación original dada por Él. Esta Palabra entonces es considerada inerrante e infalible y es la única autoridad en materia de fe y práctica; sus verdades son absolutas y eternas. Las Escrituras constituyen el único estándar por el cual debemos medir todo lo que hacemos dentro y fuera de la iglesia “Sola Escritura”.
            </Paragraph>

            <Paragraph title='Sobre Dios'>
                Que no hay más que <Quote text='Un Solo Dios' source='Deuteronomio 6:4' />, quien es eterno e inmortal. <Quote source='1Timoteo 1:17' />, Creador y Soberano sobre todo el universo, que orquesta activa o pasivamente todo cuanto ocurre. <Quote source='Lamentaciones 3:37-38' />. Por tanto, “nada se mueve en su creación sin su consentimiento”. Lo que Él desea hacer siempre lo lleva a cabo. <Quote source='Isaías 55:11' />, Cumpliendo así sus decretos eternos e inmutables. Dios existe en tres personas: Padre, Hijo y Espíritu Santo. <Quote source='Mateo 28:19; 2 Corintios 13:13-14' />. Cada una de estas tres personas merece la misma adoración y obediencia. Que “Jesucristo es el único Hijo de Dios” quien fue concebido por el Espíritu Santo y nacido de María, la virgen. Él tiene igualdad y co-eternidad con el Padre <Quote source='Filipenses 2:6-7' />. Durante su misión en la tierra se hizo semejante a los hombres, siendo al mismo tiempo verdadero hombre y verdadero Dios. Con su encarnación no perdió ninguno de sus atributos divinos. Jesucristo es el agente de la creación, ya que todas las cosas fueron creadas por Él, por medio de Él y para Él <Quote source='Colosenses 1:16' />. Que <Quote text='Jesucristo murió en la cruz por nuestros pecados' source='Romanos 5:8' /> y Él es el único agente de reconciliación entre Dios y el hombre <Quote source='1 Timoteo 2:5; Hechos 4:12' />. Después de su muerte, resucitó corporalmente de entre los muertos y ascendió al cielo, pasando a ser nuestro Sumo Sacerdote e intercesor, sentado a la diestra de Dios Padre. <Quote source='Hebreos 4:14; 8:1-2; Romanos 8:34' />. Que el “Espíritu Santo es la tercera persona de la Trinidad” a través del cual somos regenerados, y pasamos a ser nacidos de nuevo <Quote source='Juan 3:5-8' />. Es este mismo Espíritu Santo quien ha sido enviado a convencer al mundo de pecado, de justicia y de juicio <Quote source='Juan 16:7-8' />. <Quote text='El Espíritu Santo habita en el interior de cada creyente' source='Romanos 8:11' />. Él se encarga también de fortalecernos <Quote source='Hechos 1:8' /> y guiarnos a toda verdad <Quote source='Juan 16:13' />. Al hacer esto, Él glorifica a Jesucristo <Quote source='Juan 16:14' />, puesto que nunca busca glorificarse así mismo. El Espíritu Santo, junto con Cristo, distribuye los dones a cada creyente <Quote source='1 Corintios 12:4-7,11; Efesios 4:11' />, con el fin de glorificar a Jesucristo y fortalecer el cuerpo de Cristo, es decir, su Iglesia.
            </Paragraph>

            <Paragraph title='Sobre el hombre'>
                Que el “Hombre fue creado por Dios”, a su imagen y semejanza <Quote source='Génesis 1:27' />, lo que implica que el hombre es un ser moral con capacidad para pensar, sentir y con una voluntad propia. Dios creó al hombre sin pecado, en libertad para escoger entre el bien y el mal, pero el hombre pecó por decisión propia, manchando la imagen de Dios y esclavizando su voluntad al pecado <Quote source='2 Timoteo 2:25-26; Romanos 8:6-7; Romanos 7:14; Juan 8:34,36' />. Por tanto, él está destinado a condenación eterna a menos que sea regenerado por el Espíritu Santo.
            </Paragraph>

            <Paragraph title='Sobre la Salvación'>
                Que la “salvación es un regalo de Dios, obtenida por gracia solamente” “Sola Gracia”, a través de la fe solamente “Sola Fe” <Quote source='Efesios 2:8-9' />, en Cristo solamente <Quote text='Solo Cristo' source='2 Timoteo 1:9' />, por la voluntad soberana de Dios solamente y para la Gloria de Dios solamente <Quote text='Sola Gloria' source='Efesios 1:4-6; Juan 1:12-13; 6:44; Romanos 9' />. Que Dios “nos escogió en Él antes de la fundación del mundo, para que fuéramos santos y sin manchas delante de él. En amor nos predestinó para adopción como hijos para sí mediante Jesucristo, conforme al beneplácito de Su voluntad para la alabanza de la Gloria de su gracia que gratuitamente ha impartido sobre nosotros en el amado <Quote source='Efesios 1:4-6' />. Aunque la salvación es una decisión divina que depende de la gracia soberana de Dios solamente, la Palabra enseña que el hombre es responsable de sus acciones <Quote source='Juan 3:36; Santiago 1:13-14' />. Dios le ha dado el privilegio de cooperar en la proclamación de su plan de salvación <Quote source='Efesios 2:10 y 3:10' />. Que sin el derramamiento de sangre no hay remisión de pecados <Quote source='Hebreos 9:22' /> y solamente el sacrificio de Cristo en la cruz cualifica para el perdón de nuestros pecados <Quote source='1 Corintios 6:20' />. De esa forma pasamos de la esclavitud a la libertad, de la oscuridad a la luz y de la muerte a la vida <Quote source='Efesios 2:1-2' />
            </Paragraph>

            <Paragraph title='Sobre la Iglesia'>
                Que todo aquel que ha puesto su fe en Jesucristo como Señor y Salvador, a través del Espíritu Santo, forma parte de la Iglesia universal. Esta Iglesia es el cuerpo de Cristo y por tanto ella no puede ser separada del Señor. <Quote source='Efesios 1:22-23; 5:23 y Colosenses 1:24' />. Todos los creyentes deben participar activamente en la vida de la Iglesia <Quote source='Hebreos 10:25' />. Que la autoridad suprema de la Iglesia es Cristo <Quote source='1 Corintios 11:3; Efesios 1:22' />. Que Dios dispuso de líderes en la Iglesia para guiar y gobernar su pueblo. Estos líderes no se hacen, sino que son reconocidos por la iglesia en la medida en que el Espíritu de Dios los hace surgir. Los ancianos son los líderes espirituales de la congregación y los diáconos tienen a su cargo la parte administrativa y organizativa de la iglesia. Que la iglesia primitiva tuvo diaconizas como fue el caso de Febe <Quote source='Romanos 16:1' />, pero no ancianas ni pastoras. Sin embargo, reconocemos la importancia del liderazgo femenino dentro de la iglesia, como es en la enseñanza, discipulado y formación espiritual de las mujeres, niños y jóvenes, así como en múltiples otras áreas. La autoridad al frente de la iglesia del Señor funciona encabezado por el pastor titular de la iglesia y los líderes que les acompañan. Los líderes tienen que llenar los requisitos bíblicos que aparecen en <Quote source='1 Timoteo 3:1-13; Tito 1:5-9; 1 Pedro 5:1-5' />. La congregación debe someterse a su liderazgo como enseña la Palabra de Dios <Quote source='Hebreos 13:7, 17' />. Que la Iglesia ha sido llamada a ser santa y sin mancha <Quote source='Colosenses 1:22' /> y a esta Iglesia se la ha dado la responsabilidad de proclamar la obra de redención y de dar a conocer la sabiduría de Dios <Quote source='Efesios 3:10-11' />.a la libertad, de la oscuridad a la luz y de la muerte a la vida <Quote source='Efesios 2:1-2' />.
            </Paragraph>

            <Paragraph title='Sobre las ordenanzas'>
                Que a la iglesia se le han dado dos ordenanzas. Nuestro Señor Jesucristo instituyó <Quote text='la Comunión en su última cena con los discípulos' source='Mateo 26:26-30' />, para que fuese celebrada por creyentes solamente de una manera regular como un recordatorio de lo que Él hizo por nosotros en el calvario <Quote source='Lucas 22:19-20; 1 Corintios 11:26' />. Antes de esta celebración, el creyente debe examinarse y pedir perdón por sus pecados, de lo contrario traería juicio sobre sí mismo <Quote source='1 Corintios 11:27-29' />. La segunda ordenanza es el Bautismo por inmersión, que practicamos después de haber creído en Cristo como Señor y Salvador, como una representación de nuestra unión con Él, al morir al pecado y al resucitar a una nueva vida. Cada creyente debe ser bautizado voluntariamente como testimonio público de su fe en Cristo y no como vía de salvación <Quote source='Mateo 28:19; Efesios 2: 8-9' />.
            </Paragraph>

            <Paragraph title='Sobre los últimos tiempos'>
                El retorno inminente de nuestro Señor Jesucristo <Quote source='Mateo 24:42-44' />. El arrebatamiento de la iglesia será el próximo evento profético a cumplirse antes de iniciarse el período de la tribulación <Quote source='Mateo 24:3-31' />, el cual tendrá una duración de siete años <Quote source='Daniel 9:24-27; 12:11; Apocalipsis 11:2-3; 12:6; 13:5' />. Este período de tribulación será seguido por el reino del milenio en la tierra, donde Cristo reinará <Quote source='Apocalipsis 20:1-4' />. Por tanto, debemos vivir nuestras vidas como si Cristo fuese a retornar hoy. Enseñamos la resurrección del cuerpo de todos los creyentes y de los no creyentes al final de los tiempos <Quote source='Hechos 24:15' />; los primeros heredarán la vida eterna y los últimos sufrirán tormento eterno <Quote source='Mateo 25:31-46' />.
            </Paragraph>
        </StaticPageContainer>
    )
}