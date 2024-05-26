import Avatar from '../../../images/Avatar.png';
import bituhLeumiLogo from '../../../images/bituhLeumiLogo.svg';
import ClerkTable from '../clerkTable/ClerkTable';
import { TopMenu } from '../topMenu/TopMenu';

export const ClerkTasksDeshbord = () => {
    return (
        <div style={{ position: 'absolute', top: '10px', right: '30px', display: 'block', flexDirection: 'column', alignItems: 'flex-end', }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <img
                    src={bituhLeumiLogo}
                    style={{
                        width: '200px',
                        height: '40px',
                        alignContent: 'center',
                        marginRight: "63vw",
                        marginTop: '2px'
                    }}
                />
                <text style={{ width: '150px', alignSelf: 'center' }}>שלום, ישראל ישראלי</text>
                <img
                    src={Avatar}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        alignContent: 'center'
                    }}
                />
            </div>
            <TopMenu />
            <ClerkTable />
        </div>
    )
}
