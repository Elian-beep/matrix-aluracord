import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

import backgro from '../assets/wallpapers/wall-pixel.png';



function Titulo(props) {
    const Tag = props.tag || 'h1'; //Pode ser qualquer tag, se passada pela props. Caso não tenha nada, vira um h1
    return (
        <>
            <Tag>{props.children}</Tag> {/*<- children*/}
            <style jsx>{`
        ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight: 600;
        }
        `}</style>
        </>
    );
}

//Componente React
// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titutlo tag="h2">Boas vindas de votla!</Titutlo>
//             <h2>Discod - Alura Matrix</h2>
//         </div>
//     );
// }
// export default HomePage

export default function PaginaInicial() {
    // const username = 'Elian-beep';
    const [username, setUsername] = React.useState('Elian-beep'); //Mudança de estado (valor) de uma variavel      <- Hook
    //username: valor de atual. setUsername: função que muda o valor de username
    const roteamento = useRouter();                                                                               //<- Hook

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.oceanic[600],
                    backgroundImage: `url(${backgro})`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) { //Se houver alguma submnissão no formulário
                            infosDoEvento.preventDefault(); //As iformações do evento estão previnindo o default
                            console.log('Alguém submeteu o form');
                            roteamento.push('/chat'); //Direciona para uma nova rota
                            // window.location.href = '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>


                        {/* <input 
                            type="text"
                            value={username}
                            onChange={function handler(event){ //Modifica o necessário da tela a cada caracter digitado
                                console.log('usuario digitou', event.target.value); //Se atualiza a cada mudança do campo, no caso, a cada caracter digitado no campo
                                //Onde ta o valor? 
                                const valor = event.target.value;
                                //Trocar o valor da variavel (username), através do React
                                setUsername(valor);
                            }}
                        /> */}
                        <TextField
                            value={username}
                            onChange={function handler(event) { //Modifica o necessário da tela a cada caracter digitado
                                console.log('usuario digitou', event.target.value); //Se atualiza a cada mudança do campo, no caso, a cada caracter digitado no campo
                                //Onde ta o valor? 
                                const valor = event.target.value;
                                //Trocar o valor da variavel (username), através do React
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.oceanic[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.oceanic[700],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}

// fetch('https://api.github.com/users/Elian-beep').then(async (respostaDoServidor) => {
//     const respostaEsperada = await respostaDoServidor.json();
//     console.log(respostaEsperada);
// })
// Método para capturar informações de um servidor ou json online, válido para todo navegador web