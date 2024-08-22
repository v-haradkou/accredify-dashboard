import { DashboardHeader } from "./components/dashboard-header/dashboard-header"
import styles from './dashboard.module.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import Table from 'react-bootstrap/Table';
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { DocumentFill, Options } from "../../assets/icons";
import { useEffect, useState } from "react";
import { DocumentApi } from "../../apis/document-api";
import { Document } from "../../types/document";
import { CareerGoalApi } from "../../apis/career-goal-api";
import { CareerGoal } from "../../types/career-goal";
import { useUserContext } from "../../components/user-context/user-context";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const documentApi = new DocumentApi('https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json')

const careerGoalApi = new CareerGoalApi('https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json')
export const Dashboard = () => {

    const [document, setDocument] = useState<Document[]>([])

    const [goal, setGoal] = useState<CareerGoal | undefined>(undefined)

    const fetchData = async () => {
        setDocument(await documentApi.getDocuments())
        setGoal(await careerGoalApi.getGoal())
    }

    const { user} = useUserContext()

    useEffect(() => {
        fetchData()
    }, [])

    return <div className={styles.container}>
        <DashboardHeader />
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>Hi, {user.name} 👋</h1>
                    <h4 className={styles.subTitle}>Manage your documents issued by SMU Academy or track your career goal.</h4>
                </div>
                <div className={styles.grid}>
                    <div className={styles.carerGoals}>
                        <h2 className={styles.GaolPartTitle}>Career Goal</h2>
                        <div className={styles.goalWrapper}>
                            <h4 className={styles.carerProgressTitle}>Your Progress</h4>
                            <CircularProgressbar value={goal?.progress ?? 0} text={`${goal?.progress ?? 0}%`} className={styles.progressIndicator} />
                            <div className={styles.goalText}>I want to become a</div>
                            <div className={styles.goalTitle}>{goal?.name}</div>
                            <div className={styles.goalLink}>View Insights</div>
                        </div>
                    </div>
                    <div className={styles.documents}>
                        <div className={styles.tableTitleContainer}>
                            <div className={styles.tableTitle}>Recent Documents</div>
                            <div className={styles.tableLink}>View All Documents</div>
                        </div>
                        <div className={styles.tableContainer}>
                            <Table aria-label="simple table" className={styles.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Document Name</TableCell>
                                        <TableCell align="center">Received On</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {document.map((row) => {
                                        const date = new Date(row.received_on)
                                        const day = date.getDay();
                                        const mount = monthNames[date.getMonth()]
                                        const year = date.getFullYear()
                                        return (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="left"><div className={styles.tableNameRow}><DocumentFill /> {row.document_name}</div></TableCell>
                                                <TableCell align="center">{`${day} ${mount} ${year}`}</TableCell>
                                                <TableCell align="right"><Options /></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}