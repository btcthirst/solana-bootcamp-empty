import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { PaginationControl } from "@/components/pagination-control.tsx";
import { Tokens } from '@/types/tokens';


interface UserTokensPageProps {
  isWalletConnected: boolean;
  tokens: Tokens[] | undefined;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onTokenClick: (token: string) => void;
}


export const UserTokensPage: React.FC<UserTokensPageProps> = ({
  isWalletConnected,
  tokens = [],
  currentPage,
  totalPages,
  onPageChange,
  onTokenClick,
}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>User Tokens</CardTitle>
            <CardDescription>
            View and manage your tokens.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            {tokens?.map((token) => (
                <div
                key={token.mint}
                className="p-3 bg-card rounded-lg cursor-pointer"
                onClick={() => onTokenClick(token.mint)}
                >
                <span>mint address...</span>{token.mint} <br />
                <span>amount.........</span>{token.amount}
                
                </div>
            ))}
    
            {tokens?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                No tokens available
                </div>
            )}
            {!isWalletConnected && (
                <div className="text-center py-8 text-muted-foreground">
                Connect your wallet to view your tokens. 
                </div>)
            }
            </div>
        </CardContent>
        <CardFooter className="flex justify-center">
            <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            />
        </CardFooter>
    </Card>
  );
};