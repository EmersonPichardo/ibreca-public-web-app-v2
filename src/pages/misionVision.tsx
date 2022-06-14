import { useContext, useEffect } from "react";
import Paragraph from "../components/paragraph";
import Quote from "../components/quote";
import TitleContext from "../contexts/pageContext";
import StaticPageContainer from "./layout/staticPageContainer";

export default function MisionVision(): JSX.Element {
    const { setTitle, setUrl } = useContext(TitleContext);

    useEffect(() => {
        setTitle('Misión y visión');
        setUrl('/src/images/Bible_stand_up_read.jpg');
    })

    return (
        <StaticPageContainer>
            <Paragraph title='Misión' columns='auto'>
                Mediante el evangelio de nuestro Señor Jesucristo alcanzar nuestra comunidad para Cristo, siendo una congregación que prepare y envíe discípulos a la gran comisión.
            </Paragraph>

            <Paragraph title='Visión' columns='auto'>
                Ser una iglesia de crecimiento constante numérica y espiritualmente guiada por el Espíritu Santo y la palabra de Dios.
            </Paragraph>

            <Paragraph title='Propósito' columns='auto'>
                <ul className='list-disc list-inside'>
                    <li>Ser una iglesia que muestre a Cristo en nuestro diario vivir.</li>
                    <li>Ser una iglesia que persevera enseñando sana doctrina.</li>
                    <li>Ser una iglesia que que practica la comunión con los hermanos.</li>
                </ul>
            </Paragraph>

            <Paragraph columns='auto'>
                Con el fin de que el Señor añada cada día a los que han de ser salvos. <Quote source='Hechos 2:24,27' />
            </Paragraph>
        </StaticPageContainer>
    )
}