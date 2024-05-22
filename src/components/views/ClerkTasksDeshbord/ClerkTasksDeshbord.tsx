import Avatar from '../../../images/Avatar.png';

export const ClerkTasksDeshbord = () => {
    return (
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <img
                src={Avatar}
                alt="Avatar"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '30px'
                }}
            />
        </div>
    )
}