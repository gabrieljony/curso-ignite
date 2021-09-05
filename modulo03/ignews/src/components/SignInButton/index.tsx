import styles from './styles.module.scss';
import Image from 'next/image';
import githubActive from '../../../public/images/githubActive.svg';
import close from '../../../public/images/close.svg';
import github from '../../../public/images/github.svg';

const SignInButton = () => {

    const isUserLoggedIn: boolean = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <Image
                src={githubActive}
                alt="github"
                width={20}
                height={20}
            />
            <p>Gabriel Jony</p>
            <div className={styles.close}> 
            <Image 
                src={close} 
                alt="github" 
                width={20}
                height={20}/>
            </div>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <Image src={github} alt="github" width={20} height={20}/>
            <p>Sign in With Github</p>
        </button>
    );
}

export default SignInButton;