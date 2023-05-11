import { createBoard } from '@wixc3/react-board';
import { Navigation } from '../../../components/navigation/navigation';

export default createBoard({
    name: 'Navigation',
    Board: () => <Navigation />,
    environmentProps: {
        canvasHeight: 19,
        canvasWidth: 292,
    },
});
