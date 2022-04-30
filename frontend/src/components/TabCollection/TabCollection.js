
import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CareerOverview from '../../main_pages/CareerOverview.js';
import CardGrid from '../CardGrid/CardGrid.js';
import ProfessionalForm from '../ProfessionalForm/ProfessionalForm.js';

const blue = {
  50: '#E0E2E5',
  100: '#FAE1DD',
  200: '#FAE1DD',
  300: '#FAE1DD',
  400: '#FAE1DD',
  500: '#FAE1DD',
  600: '#BEBEBE', // dont change  
  700: '#FAE1DD',
  800: '#FAE1DD',
  900: '#FAE1DD',
};

const Tab = styled(TabUnstyled)`
  font-family: Poppins;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #FAE1DD;
  width: 100%;
  padding: 12px 16px;
  margin: 12px 12px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: black;
    border-radius: 20px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 1;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: "Poppins";
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 40%;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin-left: 70px;
  font-family: Poppins;

  
`;

 class UnstyledTabsCustomized extends component {
  constructor(props) {
    super(props)
    const state = {
      modalShouldDisplay: false,
      modalContents: null,
      displayModal: this.displayModal,
      closeModal: null,
    }

    this.state = state;
  }

  displayModal = (providedContents) => {
    this.setState({
      modalShouldDisplay: true,
      modalContents: providedContents
    })
  }

   
  render() {
    const modal = <div>NO MODAL</div>

    if(this.state.modalShouldDisplay) {
      modal = this.state.modalContents
    }


  return (
    
    <TabsUnstyled defaultValue={0}>

      <TabsList>
        <Tab>Career Overview</Tab>
        <Tab>Professional Stories</Tab>
        <Tab>Discussion Forum</Tab>
      </TabsList>

      <TabPanel scrollButtons="auto" value={0}>
        <CareerOverview/>
      </TabPanel>

      <TabPanel scrollButtons="auto" value={1}>
        {modal}
        <ProfessionalForm/>
        <CardGrid cardType={"storiesCard"} displayModal={this.state.displayModal}/>
        </TabPanel>

      <TabPanel value={2}>Third content</TabPanel>
      
    </TabsUnstyled>
   
  );
  }
}

export default UnstyledTabsCustomized;
