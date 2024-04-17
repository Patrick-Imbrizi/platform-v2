import React from 'react'
import { CardActionArea, Card, Stack, Tooltip, Typography, IconButton } from '@mui/material'
import { FilePdfOutlined, DownloadOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';

const MaterialCard = () => {
    const theme = useTheme();
    return (
        <CardActionArea>
            <Card elevation={0} flex sx={{
                border: '1px solid',
                borderRadius: 2,
                borderColor: theme.palette.grey.A800,
                px: 1.25,
                py: 0.5
            }}
                onClick={() => console.log('clicou no material')}
            >

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Tooltip title="Material complementar da aula do dia 12/12/30">
                        <Stack direction="row" alignItems="center" gap={1} overflow="hidden">
                            <FilePdfOutlined style={{ fontSize: 16 }} />
                            <Typography
                                variant="body1"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    fontSize: 14,
                                }}
                            >
                                Nome do material muito longo que será truncado Nome do material muito longo que será truncado Nome do material muito longo que será truncado Nome do material muito longo que será truncado Nome do material muito longo que será truncado
                            </Typography>
                        </Stack>
                    </Tooltip>
                    <Tooltip title="Baixar material">
                        <IconButton sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                            <DownloadOutlined />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Card>

        </CardActionArea>
    )
}

export default MaterialCard