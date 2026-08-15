import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Iconify } from 'src/components/iconify';

export type CmsSectionPageProps = {
  title: string;
  description: string;
  icon: string;
  actions?: ReactNode;
};

export default function CmsSectionPage({ title, description, icon, actions }: CmsSectionPageProps) {
  return (
    <Box>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={2}>
          <Stack spacing={0.75}>
            <Typography variant="h4">{title}</Typography>
            <Typography color="text.secondary">{description}</Typography>
          </Stack>
          {actions}
        </Stack>

        <Card sx={{ p: { xs: 3, md: 5 } }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ py: 6 }}>
            <Iconify icon={icon} width={56} color="text.disabled" />
            <Typography variant="h6">{title} workspace</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
              This module is ready for its data layer. Connect it to the TYCITC CMS API to add, edit,
              publish and manage real content.
            </Typography>
            <Button variant="outlined" disabled>
              Data connection pending
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
