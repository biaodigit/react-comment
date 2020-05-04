import * as React from 'react';

interface Props {
    // children: React.ReactNode
}

class Header extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        return (
            <div className="header-container">
                header
            </div>
        )
    }
}

export default Header