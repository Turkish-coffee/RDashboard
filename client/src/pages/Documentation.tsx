
import tw from 'twin.macro'



const Box= tw.div `
  flex
  flex-row
  justify-between
`



export const Documentation = () => {
    return (
        <div className="relative w-[1208px] h-[447px] overflow-hidden">
            <div className="absolute w-[1144px] h-[401px] top-[55px] left-[4px]">
                <div className="absolute w-[1144px] h-[360px] top-[41px] left-0 overflow-hidden">
                    <div className="relative w-[1168px] h-[327px] top-[14px] left-[15px]">
                        <div className="absolute w-[919px] h-[163px] top-0 left-0">
                            <div className="absolute w-[853px] top-0 left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[14px] tracking-[0] leading-[normal]">
                                · Achats :
                            </div>
                            <div className="absolute w-[895px] h-[55px] top-[108px] left-[24px]">
                                <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                    B. Montant le plus élevé de tous les achats
                                </p>
                                <div className="absolute w-[855px] h-[34px] top-[21px] left-[40px]">
                                    <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                        <span className="text-white">
                                            Méthode : GET
                                            <br />
                                            Endpoint :{" "}
                                        </span>
                                        <span className="text-[#2990f1]">&#34;/api/v1/sales/top-sales&#34;</span>
                                    </p>
                                </div>
                            </div>
                            <div className="absolute w-[895px] h-[73px] top-[24px] left-[24px]">
                                <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                    A. Nombre d’employés du service Achats pour l’ensemble du groupe laitier
                                </p>
                                <div className="absolute w-[855px] h-[51px] top-[22px] left-[40px]">
                                    <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                        <span className="text-white">
                                            Methode : GET
                                            <br />
                                            Endpoint :
                                        </span>
                                        <span className="text-[#2990f1]">
                                            {" "}
                                            &#34;/api/v1/employees?service={"{"}service{"}"}&#34;
                                            <br />
                                        </span>
                                        <span className="text-white">
                                            Par exemple : pour obtenir le nombre des employés dans le service &#34;achats&#34;, l’endpoint est
                                            &#34;/api/v1/employees?service=achats&#34;.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[1168px] h-[152px] top-[175px] left-0">
                            <div className="relative w-[1170px] h-[152px]">
                                <div className="absolute w-[919px] h-[149px] top-[3px] left-0">
                                    <div className="absolute w-[853px] top-0 left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[14px] tracking-[0] leading-[normal]">
                                        · Collecte (déchets) :
                                    </div>
                                    <div className="absolute w-[895px] h-[59px] top-[90px] left-[24px]">
                                        <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                            B. Pourcentage des zones ayant été validées cette année par un audit de conformité
                                        </p>
                                        <div className="absolute w-[855px] h-[34px] top-[25px] left-[40px]">
                                            <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                                <span className="text-white">
                                                    Méthode : GET
                                                    <br />
                                                    Endpoint :{" "}
                                                </span>
                                                <span className="text-[#2990f1]">&#34;/api/v1/zones/operationnal-rate&#34;</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute w-[895px] h-[58px] top-[22px] left-[24px]">
                                        <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                            A. Zone la plus chaude de tout le groupe laitier
                                        </p>
                                        <div className="absolute w-[855px] h-[34px] top-[24px] left-[40px]">
                                            <p className="absolute w-[853px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                                <span className="text-white">
                                                    Methode : GET
                                                    <br />
                                                    Endpoint :
                                                </span>
                                                <span className="text-[#2990f1]"> &#34;/api/v1/zones/heat &#34;</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-[533px] h-[149px] top-0 left-[637px]">
                                    <div className="absolute w-[494px] top-0 left-0 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[14px] tracking-[0] leading-[normal]">
                                        · Juridique :
                                    </div>
                                    <div className="absolute w-[519px] h-[59px] top-[90px] left-[14px]">
                                        <p className="absolute w-[494px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                            B. Nombre maximum de personnel juridique regroupé sur le même site
                                        </p>
                                        <div className="absolute w-[496px] h-[34px] top-[25px] left-[23px]">
                                            <p className="absolute w-[494px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                                <span className="text-white">
                                                    Méthode : GET
                                                    <br />
                                                    Endpoint :{" "}
                                                </span>
                                                <span className="text-[#2990f1]">&#34;/api/v1/employees?service=juridique&#34;</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute w-[519px] h-[58px] top-[22px] left-[14px]">
                                        <p className="absolute w-[494px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[normal]">
                                            A. Nombre de machines en panne
                                        </p>
                                        <div className="absolute w-[496px] h-[34px] top-[24px] left-[23px]">
                                            <p className="absolute w-[494px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[normal]">
                                                <span className="text-white">
                                                    Methode : GET
                                                    <br />
                                                    Endpoint :
                                                </span>
                                                <span className="text-[#2990f1]">&nbsp;&nbsp;&#34;/api/v1/machines/shutdown&#34;</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="absolute w-[898px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                    Bienvenue dans la documentation de l&#39;API du Groupe Laitier. Cette API fournit des informations cruciales
                    pour la gestion des opérations du groupe. Vous trouverez ci-dessous les différents endpoints disponibles,
                    accompagnés de leurs méthodes et descriptions :
                </p>
            </div>
            <div className="absolute w-[521px] top-[5px] left-[4px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal] whitespace-nowrap">
                Documentation API
            </div>
        </div>
    );
};



export default Documentation