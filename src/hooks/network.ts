import { Network } from '@capacitor/network';
import { useState } from 'react';


export function networkStatusChange() {
    const [networkStatus, setStatus] = useState<String>();

    Network.addListener('networkStatusChange', status => {
        console.log('Network status changed', status);
    });
    
    const logCurrentNetworkStatus = async () => {
        const status = await Network.getStatus();

        setStatus(status.toString());
        console.log('Network status:', status);
    };

    return{
        networkStatus
    }
}