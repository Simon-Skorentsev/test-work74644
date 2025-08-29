import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import type { SubmitHandler, UseFormReset } from 'react-hook-form';

import { PublicPages } from '@/config/publicPages.config';

import { authService } from '@/services/auth.service';
import { EnumSign, LoginData, RegisterData } from '@/types/auth.types';

export function useAuthForm<T extends LoginData & RegisterData>(type: EnumSign, reset: UseFormReset<T>) {
	const router = useRouter();

	const [isPending, startTransition] = useTransition();

	const { mutateAsync, isPending: isAuthPending } = useMutation({
		mutationKey: [type],
		mutationFn: (
			data: { signType: EnumSign.LOGIN; data: LoginData } | { data: RegisterData; signType: EnumSign.REGISTER },
		) => authService.sign(data),
	});

	const onSubmit: SubmitHandler<T> = async (data) => {
		const { toast } = await import('react-hot-toast');

		toast.promise(mutateAsync({ signType: type, data }), {
			loading: 'Loading...',
			success: () => {
				startTransition(() => {
					reset();
					router.replace(PublicPages.HOME);
				});

				return 'Success login!';
			},
			error: (e: any) => {
				if (axios.isAxiosError(e)) {
					return e.response?.data?.message || e.message;
				}
			},
		});
	};

	const isLoading = isPending || isAuthPending;

	return {
		onSubmit,
		isLoading,
	};
}
