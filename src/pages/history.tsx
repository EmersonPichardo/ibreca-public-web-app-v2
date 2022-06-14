import { useContext, useEffect } from "react";
import Paragraph from "../components/paragraph";
import TitleContext from "../contexts/pageContext";
import StaticPageContainer from "./layout/staticPageContainer";

export default function History(): JSX.Element {
    const { setTitle, setUrl } = useContext(TitleContext);

    useEffect(() => {
        setTitle('Historia');
        setUrl('/src/images/Bible_stand_up_read.jpg');
    }, [])

    return (
        <StaticPageContainer>
            <Paragraph columns='lg'>
                <p>
                    La iglesia de la caleta surge por la visión de dos siervos de Dios el Pastor Rolando Arias de la Iglesia Arca de Salvación en E.U.A. y el Pastor Ramón de Jesús Lebrón de la Iglesia Bautista Redención en el sector de Cristo Rey.
                </p>

                <p>
                    El primero el pastor Arias fue invitado por el pastor lebrón a la campaña aniversario de la iglesia Madre Iglesia Bautista Redención “Libres en Cristo, y este por recomendación de un miembro de su iglesia para que visitara su madre y le predicará durante la visita la invitó a la campaña y ésta se convirtió al Señor esa noche, por lo que acordaron inicial un estudio bíblico en la casa de ella, viajando una vez a la semana con un grupo de hermanos de nuestra iglesia donde evangelizaban en el sector y luego llevaban las personas al estudio Bíblico.
                </p>

                <p>
                    Luego de varios meses viajando para impartir el estudio el Pastor Ramón un día el cual no podía asistir por compromisos del ministerio solicitó al Pastor Fernando Linares Perdomo quien en ese momento era diacono, y encargado de estudio bíblico y entre otros ministerio que desempeñaba en la iglesia madre para que le sustituyera ese día, y luego de ver que Dios había puesto gracia en él delante de los hermanos, decide incluirlo entre los hermanos que iba a dar el estudio ínter-semanalmente.
                </p>

                <p>
                    Al ver la obra del Espíritu Santo en la decisiones de fe en el estudio bíblico, coordina con el pastor Rolando Arias orar por dirección de Dios para iniciar una Iglesia con el números de hermanos que permanecían firme.
                </p>

                <p>
                    Luego del Señor confirmarle su voluntad de iniciar una obra en la caleta buscan un local, y deciden orar por los hermanos que participaban impartiendo los estudio bíblico para que Dios le confirmará quién estaría a cargo de la obra, confirmándole Dios al Pastor Fernando Linares Perdomo, quien da el primer culto como iglesia local el día 9 de Febrero del año 2012, y por la gracia y la misericordia de Dios aún esta como Pastor de nuestra Iglesia Bautista Redención en la “Caleta”.
                </p>
            </Paragraph>
        </StaticPageContainer>
    )
}