import styles from "./tabs.module.scss";
import { Tab, Tabs as MuiTabs, TextField } from "@mui/material";
import { FC, useState } from "react";
// import DescriptionTab from "./components/descriptionTab/descriptionTab";
// import ShippingTab from "./components/shippingTab/shippingTab";
// import ContactTab from "./components/contactTab/contactTab";
// import ReviewsTab from "./components/reviewsTab/reviewsTab";

interface TabsProps {
    tabNames: string[]
}

const Tabs: FC<TabsProps> = ({ tabNames }) => {
    const [currentTab, setCurrentTab] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const displayTabs = () => {
        return tabNames.map((v, i) => <Tab key={i} label={v} />)
    }

    const displayContent = () => {
        const content = {
            0: < >content1</>,
            1: < >content2</>,
            2: < >content3</>,
            3: < >content4</>
        }

        return content[currentTab as keyof typeof content]
    }

    return (
        <div className={styles.root}>
            <MuiTabs className="tabs-header" centered value={currentTab} onChange={handleChange}>
                {displayTabs()}
            </MuiTabs>
            {displayContent()}
        </div>
    )
}

export default Tabs;