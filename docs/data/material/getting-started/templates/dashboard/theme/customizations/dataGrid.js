import { alpha } from '@mui/material/styles';

import { gray } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const dataGridCustomizations = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
      }),
      cell: ({ theme }) => ({ borderTopColor: theme.palette.divider }),
      menu: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
        boxShadow:
          'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
        '& .MuiMenuItem-root': {
          margin: '0 4px',
        },
        '& .MuiListItemIcon-root': { marginRight: 0 },
        '& .MuiMenu-list': {
          '& .MuiDivider-root': { margin: '0 -8px' },
        },
        ...theme.applyStyles('dark', {
          boxShadow:
            'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
        }),
      }),
      row: ({ theme }) => ({
        '&:last-of-type': { borderBottom: `1px solid ${theme.palette.divider}` },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-selected': {
          background: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        //...theme.applyStyles('dark', {}),
      }),
      iconButtonContainer: ({ theme }) => ({
        '& .MuiIconButton-root': {
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
          '&:active': {
            backgroundColor: gray[200],
          },
          ...theme.applyStyles('dark', {
            color: gray[50],
            '&:hover': {
              backgroundColor: gray[800],
            },
            '&:active': {
              backgroundColor: gray[900],
            },
          }),
        },
      }),
      menuIconButton: ({ theme }) => ({
        border: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: gray[100],
        },
        '&:active': {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles('dark', {
          color: gray[50],
          '&:hover': {
            backgroundColor: gray[800],
          },
          '&:active': {
            backgroundColor: gray[900],
          },
        }),
      }),
      columnHeaderTitleContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      columnHeaderDraggableContainer: { paddingRight: 2 },
    },
  },
};
