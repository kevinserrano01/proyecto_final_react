import React from 'react'

export const SideBar = () => {
  return (
    <>
        <div className="left-section">
            <div className="left1">
                <div className="pf1" hover-color="blue">
                    <img src="../static/icons/discord-icon.png" />
                    <div className="left-line"></div>
                    <div className="tooltip">Home</div>
                </div>
                <div className="line"></div>

                {/* <!--boton agregar servidor--> */}
                <div className="pf4">
                    <a href="./addServer.html">
                        {/* <svg style="color: rgba(1, 248, 1, 0.76)" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
                        </path>
                        </svg> */}
                        <div className="tooltip" style="right: -120px">Add a Server</div>
                    </a>
                </div>

                {/* <!--boton buscar servidor--> */}
                <div className="pf4">
                    <a href="./searchServer.html">
                        {/* <svg style="color: rgba(1, 248, 1, 0.76)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg> */}
                        <div className="tooltip" style="right: -120px">Search Server</div>
                    </a>
                </div>

                <div id="servidores-container">
                    {/* <!-- AQUI VAN TODOS LOS SERVIDORES QUE ESTE REGISTRADO EL USUARIO --> */}
                </div>

                
            </div>
            <div className="left2">
                <div className="lupper">
                    <p id="server_name_title" style="font-size: 15px; font-weight: bold;"></p>
                    <div className="ricons">
                        <div className="holder">
                            <a id="btn-Exit-Server" className="createChannel">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-box-arrow-left icono-salir-server" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg> */}
                                <div className="tooltip2">Exit Server</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="channels">
                    <div className="name">
                        <p className="p1">TEXT CHANNELS</p>
                        <div className="holder">
                            <a className="createChannel" href="./addChannel.html">
                                <p className="p2">&plus;</p>
                                <div className="tooltip2">Create Channel</div>
                            </a>
                        </div>
                    </div>

                    <div id="channels-container" className="channel">
                        {/* <!-- CANALES DEL SERVIDOR ------------------------------------------------------------------------------------------------- --> */}
                    </div>

                    <div className="channel">
                        <div className="name">
                            <p className="p1">VOICE CHANNELS</p>
                            <div className="holder">
                                <p className="p2">&plus;</p>
                                <div className="tooltip2">Create Channel</div>
                            </div>
                        </div>
                        <div className="contents2">
                            <div>
                                <img src="../static/icons/voice.png" style="width: 20px" />
                                <p className="channel-p">General</p>
                            </div>
                            <div style="margin-right: 7px;">
                                <div className="holder">
                                    <img src="../static/icons/add-friend.png" className="show-img" />
                                    <div className="tooltip2" style="left: -280%; top: -35px">Create Invite</div>
                                </div>
                                <div className="holder">
                                    <img src="../static/icons/edit-channel.png" style="margin-left: 5px;" className="show-img" />
                                    <div className="tooltip2" style="left: -210%; top: -35px">Edit Channel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Footer--> */}
                <div className="ffooter">
                    <div className="profooter">
                        <img src="../static/images/Discord_Logo.jpg" style="width: 40px; border-radius: 20px;" />
                        <div style="margin-left: 5px;" className="holder">
                            <a href="./profile.html">
                                <p id="username" style="color: white; font-size: 13px; font-weight: bold;"></p>
                            </a>
                            <p style="color: grey; font-size: 12px">#1959</p>
                            <div className="tooltip2" style="font-size: 13px; left: -150%; top: -40px">Click to Copy Username</div>
                        </div>
                    </div>
                    <div className="iconsfooter">
                        <div className="holder" style="margin-right: 10px">
                            <img src="../static/icons/microphone.png" />
                            <div className="tooltip2" style="font-size: 13px; left: -80%; top: -37px">Mute</div>
                        </div>
                        <div className="holder" style="margin-right: 10px">
                            <img src="../static/icons/headset.png" />
                            <div className="tooltip2" style="font-size: 13px; left: -80%; top: -37px">Deafen</div>
                        </div>
                        <div className="holder" style="margin-right: 8px">
                            <img src="../static/icons/ec-bigger.png" />
                            <div className="tooltip2" style="font-size: 13px; left: -210%; top: -37px">User Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- SECCION CHAT ----------------------------------------------------------------------- --> */}
        <div className="right-section">
            <div className="rupper">
                <div>
                    <img src="../static/icons/hashtag.png" />
                    <p id="channel_name_title" style="color: rgb(231, 231, 231); font-weight: bold; font-size: 18px; margin-left: 5px;"></p>
                </div>
                <div className="ricons">
                    <div className="holder">
                        <img src="../static/right-images/hashmessage.png" style="margin-right: 13px;" /> 
                        <div className="tooltip2">Threads</div>
                    </div>
                    <div className="holder">
                        <img src="../static/right-images/alarm.png" style="margin-right: 13px;" /> 
                        <div className="tooltip2">Not Settings</div>
                    </div>
                    <div className="holder">
                        <img src="../static/right-images/pin.png" style="margin-right: 13px;" /> 
                        <div className="tooltip2">Pinned Messages</div>
                    </div>
                    <div className="holder">
                        <img src="../static/right-images/group.png" style="margin-right: 13px;" />
                        <div className="tooltip2">Member List</div>
                    </div>
                    <input placeholder="Search" className="rinput" /> 
                    <div className="holder">
                        <img src="../static/right-images/inbox.png" style="margin-right: 13px;" /> 
                        <div className="tooltip2">Inbox</div>
                    </div>
                    <div className="holder">
                        <img src="../static/right-images/help.png" />
                        <div className="tooltip2">Help</div>
                    </div>
                </div>
            </div>
            <div className="messages">
                <div className="messages-start">
                    <h1 style="color: rgb(240, 240, 240);">Bienvenido!</h1>
                    <p style="color: #B0B2B6; font-size: 14px; margin-top: 5px;">Este es el comienzo de este servidor.</p>
                </div>
                <div style="position: relative">
                    <div className="line"></div>
                    <div className="date">29 Septiembre 2023</div>
                </div>

                <div id="messages-container">
                    {/* <!-- AQUI VAN LOS MENSJES DE LOS USUARIOS --> */}
                </div>

            </div>
            {/* <!-- INPUT MENSAJE -------------------------------------------------------------------- --> */}
            <div className="dinput">
                <div className="input-group">
                    <input id="messageContent" type="text" className="input" name="messageContent" placeholder="write your message..." autoComplete="off" required />
                    <input id="btnEnviar" className="button--submit" value="Send" type="submit" />
                </div>
            </div>

        </div>

        {/* <!-- Modal para editar mensaje --> */}
        <div id="miModal" className="modal">
            <div className="modal-contenido">
                <span className="cerrar-modal" id="cerrarModal">&times;</span>
                <h2>Edit message</h2>
                <input type="text" id="campoDeEntradaModal" />
                <button id="obtenerValor">Edit</button>
            </div>
        </div>
    </>
  )
}
