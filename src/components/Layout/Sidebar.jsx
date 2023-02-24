import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
    return (
        <div>
            <LayoutSidebar>
                <ProfileBox></ProfileBox>
            </LayoutSidebar>
        </div>
    );
}

const ProfileBox = styled.div`
    ${(props) => props.theme.FlexRow};
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: white;
`;

const LayoutSidebar = styled.div`
    background-color: ${(props) => props.theme.CL.brandColor};
    overflow: hidden;
    width: 26vw;
    min-height: 90vh;
    border-radius: 30px;
    margin-right: 10px;
    box-shadow: 3px 0px 0px 3px ${(props) => props.theme.CL.scroll};
`;
